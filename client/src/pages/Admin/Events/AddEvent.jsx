import { useState, useEffect } from 'react';
import API from '../../../services/API'
import {toast} from 'react-toastify' 

const AddEvent = ({setAddPopup, setEvents}) => {
    const [categories, setCategories] = useState()
    useEffect(()=>{
        async function getCategories(){
            try{
                const res = await API.get('admin/categories')
                setCategories(res.data.categories)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getCategories()
    },[])
    const [event, setEvent] = useState({
        name:"",
        desc:"",
        date:"",
        price:"",
    })
    const [event_category, setEvent_category] = useState("")
    const addEvent = async(e) => {
        e.preventDefault()
        try{
            const res = await API.post('/admin/events', {...event, category:event_category})
            toast.success(res.data.message)
            setEvents((old_events)=>{
                return [
                    ...old_events,
                    res.data.event
                ]
            })
            setAddPopup(false)
        }catch(error){
            toast.error(error.response?.data.message)
        }
    }
    const onchange = (e) => {
        const {name, value} = e.target;
        setEvent((old_data)=>{
            return {
                ...old_data,
                [name]:value
            }
        })
    }
  return (
    <div>
        <div className=" absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 z-50 text-3xl">
            <form onSubmit={addEvent}>
            <div className=" w-4/5 bg-white h-auto my-8 mx-auto flex flex-col z-50 p-8">
                <span className=' text-2xl text-slate-800 py-2'>NAME :</span>
                <input name="name" onChange={onchange} value={event.name} className=' text-1xl text-black p-4 rounded outline outline-slate-700' type="text" />
                <span className=' text-2xl text-slate-800 py-2'>DESCRIPTION :</span>
                <textarea name="desc" onChange={onchange} value={event.desc} className=' text-1xl text-black p-4 rounded outline outline-slate-700' id="" cols="30" rows="10"></textarea>
                <span className=' text-2xl text-slate-800 py-2'>DATE</span>
                <input name="date" onChange={onchange} value={event.date} className=' text-1xl text-black p-4 rounded outline outline-slate-700' type="date"id="" />
                <span className=' text-2xl text-slate-800 py-2'>REGISTARTION FEES :</span>
                <input name='price' onChange={onchange} value={event.price} className=' text-1xl text-black p-4 rounded outline outline-slate-700' type="number" />
                <span className=' text-2xl text-slate-800 py-2'>CATEGORY :</span>
                <select onChange={(e)=>{setEvent_category(e.target.value)}} name="category" id="category">
                    <option  >select</option>
                    {categories && categories.map((category, index)=>{
                        return <option value={category._id} key={index}>{category.name}</option>
                    })}
                </select>
                <div className="">
                    <button type='submit' className=' px-4 py-2 bg-green-600 text-2xl font-semibold text-white m-2'>ADD EVENT</button>
                    <button type='button' onClick={()=>{
                        setAddPopup(false)
                    }} className=' px-4 py-2 bg-red-600 text-2xl font-semibold text-white my-4 m-2'>CLOSE</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddEvent
