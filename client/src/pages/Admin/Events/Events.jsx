import './events.css';
import { useState, useEffect } from 'react';
import API from '../../../services/API'
import {toast} from 'react-toastify' 
function Events() {
    const [addPopup, setAddPopup] = useState(false)
    const [events, setEvents] = useState([])
    useEffect(()=>{
        async function getEvents(){
            try{
                const res = await API.get('admin/get-events')
                setEvents(res.data.events)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getEvents()
    })
    const [event, setEvent] = useState({
        name:"",
        desc:"",
        date:"",
        regfee:""
    })
    const onchange = (e) => {
        const {name, value} = e.target;
        setEvent((old_data)=>{
            return {
                ...old_data,
                [name]:value
            }
        })
    }
    const addEvent = async(e) => {
        e.preventDefault()
        try{
            await API.post('/admin/add-event', event)
            toast.success('Event added successfully')
            setAddPopup(false)
        }catch(error){
            toast.error(error.response?.data.message)
        }
    }
    return (
        <div>
            <div className="table-box">
                <div className="table-header">
                    <p>EVENTS</p>
                </div>
                <div className="add-event cursor-pointer" onClick={()=>{setAddPopup(true)}}>
                  <button className="add-new">+ADD EVENTS</button>
                </div>
                <div className="table-row table-head">
                    <div className="table-cell">
                        <p>ID</p>
                    </div>
                    <div className="table-cell">
                        <p>NAME</p>
                    </div>
                    <div className="table-cell">
                        <p>DATE</p>
                    </div>
                    <div className="table-cell">
                        <p>NUMBER OF PARTICIPANTS</p>
                    </div>
                </div>
                {events && events.map((event, index)=>{
                    return (
                        <div className="table-row">
                            <div className="table-cell first-cell">
                                <p>{index+1}</p>
                            </div>
                            <div className="table-cell d">
                                <p>{event.name}</p>
                            </div>
                            <div className="table-cell">
                                <p>{event.date}</p>
                            </div>
                            <div className="table-cell last-cell">
                                <p>{event.participants_count}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {addPopup && 
            <div className=" absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 z-50">
                <form onSubmit={addEvent}>
                <div className=" w-4/5 bg-white h-auto my-8 mx-auto flex flex-col z-50 p-8">
                    <span className=' text-2xl text-slate-800 py-2'>NAME :</span>
                    <input onChange={onchange} value={event.name} className=' text-1xl text-black p-4 border-2 rounded border-black' type="text" />
                    <span className=' text-2xl text-slate-800 py-2'>DESCRIPTION :</span>
                    <textarea onChange={onchange} value={event.desc} className=' text-1xl text-black p-4 border-2 rounded border-black'  name="" id="" cols="30" rows="10"></textarea>
                    <span className=' text-2xl text-slate-800 py-2'>DATE</span>
                    <input onChange={onchange} value={event.date} className=' text-1xl text-black p-4 border-2 rounded border-black' type="date" name="" id="" />
                    <span className=' text-2xl text-slate-800 py-2'>REGISTARTION FEES :</span>
                    <input onChange={onchange} value={event.regfee} className=' text-1xl text-black p-4 border-2 rounded border-black' type="number" />
                    <div className="">
                        <button type='submit' className=' px-4 py-2 bg-green-600 text-2xl font-semibold text-white m-2'>ADD EVENT</button>
                        <button type='button' onClick={()=>{
                            setAddPopup(false)
                        }} className=' px-4 py-2 bg-red-600 text-2xl font-semibold text-white my-4 m-2'>CLOSE</button>
                    </div>
                </div>
                </form>
            </div>}
        </div>
    );
}

export default Events;
