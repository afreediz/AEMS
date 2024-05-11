import './events.css';
import { useState, useEffect } from 'react';
import API from '../../../services/API'
import {toast} from 'react-toastify' 
import AddEvent from './AddEvent';
function Events() {
    const [addPopup, setAddPopup] = useState(false)
    const [events, setEvents] = useState()
    const [categories, setCategories] = useState()
    const [selected_category, setSelected_category] = useState()
    useEffect(()=>{
        async function getEvents(){
            try{
                const res = await API.get('admin/events')
                setEvents(res.data.events)
                const category_res = await API.get('admin/categories')
                setCategories(category_res.data.categories)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getEvents()
    }, [])
    const delete_event = async(id)=>{
        try{
            await API.delete(`admin/events/${id}`)
            setEvents((old_events)=>{
                return old_events.filter((event)=>{
                    return event._id != id
                })
            })
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
                <div className="add-event cursor-pointer">
                  <select value={selected_category} onChange={(e)=>{
                    setSelected_category(e.target.value)
                    setEvents((old_events)=>{
                        return old_events.filter((event)=>{
                            return event.category == e.target.value
                        })
                    })
                    }} name="" id="">
                        {categories && categories.map((category, index)=>{
                            return <option key={index} value={category._id}>{category.name}</option>
                        })}
                  </select>
                  <button className="add-new" onClick={()=>{setAddPopup(true)}} >+ADD EVENTS</button>
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
                        <p>price</p>
                    </div>
                    <div className="table-cell">
                        <p>NUMBER OF PARTICIPANTS</p>
                    </div>
                    <div className="table-cell">
                        <p className=' mx-5'>OPERATION</p>
                    </div>
                </div>
                {events && events.map((event, index)=>{
                    return (
                        <div key={index} className="table-row">
                            <div className="table-cell text-center">
                                <p>{index+1}</p>
                            </div>
                            <div className="table-cell d">
                                <p>{event.name}</p>
                            </div>
                            <div className="table-cell">
                                <p>{event.date}</p>
                            </div>
                            <div className="table-cell">
                                <p>{event.price}</p>
                            </div>
                            <div className="table-cell">
                                <p>{event.participants_count}</p>
                            </div>
                            <div className="table-cell last-cell">
                                <button className=' text-white px-4 py-2 bg-red-600 mx-5' onClick={()=>{delete_event(event._id)}}>delete</button>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            {addPopup && <AddEvent setAddPopup={setAddPopup} setEvents={setEvents}/>}
        </div>
    );
}

export default Events;
