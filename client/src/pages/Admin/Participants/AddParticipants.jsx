import React from 'react'
import './participants.css'
import { useState, useEffect } from 'react';
import API from '../../../services/API'
import {toast} from 'react-toastify' 

const AddParticipants = ({setAddPopup, setParticipants}) => {
    const [events, setEvents] = useState()
    const [selectedEvent, setSelectedEvent] = useState("")

    useEffect(()=>{
        async function getEvents(){
            try{
                const res = await API.get('admin/events')
                setEvents(res.data.events)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getEvents()
    },[])
    const [add_participant, add_setParticipant] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        event:""
    })
    const onchange = (e) => {
        const {name, value} = e.target;
        add_setParticipant((old_data)=>{
            return {
                ...old_data,
                [name]:value
            }
        })
    }
    const addParticipant = async(e) => {
        e.preventDefault()
        try{
            const res = await API.post('/register', {
                ...add_participant,
                event:selectedEvent
            })
            toast.success(res.data.message)
            setParticipants((old_participants)=>{
                return [
                    ...old_participants,
                    res.data.participant
                ]
            })
            setAddPopup(false)
        }catch(error){
            toast.error(error.response?.data.message)
        }
    }
  return (
    <div className=" absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 z-50">
        <form onSubmit={addParticipant}>
        <div className=" w-4/5 bg-white h-auto my-8 mx-auto flex flex-col z-50 p-8">
            <span className=' text-2xl text-slate-800 py-2'>NAME :</span>
            <input className='outline outline-slate-700  text-1xl text-black p-4 border-2 rounded border-black' value={add_participant.name} name="name" onChange={onchange} type="text" />
            <span className=' text-2xl text-slate-800 py-2'>EMAIL :</span>
            <input className='outline outline-slate-700  text-1xl text-black p-4 border-2 rounded border-black' value={add_participant.email} name="email" onChange={onchange}/>
            <span className=' text-2xl text-slate-800 py-2'>PHONE :</span>
            <input className='outline outline-slate-700  text-1xl text-black p-4 border-2 rounded border-black' value={add_participant.phone} name="phone" onChange={onchange} />
            <span className=' text-2xl text-slate-800 py-2'>ADDRESS :</span>
            <input className='outline outline-slate-700  text-1xl text-black p-4 border-2 rounded border-black' value={add_participant.address} name="address" onChange={onchange}/>
            <span className=' text-2xl text-slate-800 py-2'>EVENT :</span>
            <select name="event" onChange={(e)=>{setSelectedEvent(e.target.value)}} id="">
            <option  >select</option>
                    {events && events.map((event, index)=>{
                        return <option value={event._id} key={index}>{event.name}</option>
                    })}
            </select>
            <div className="">
                <button type='submit' className=' px-4 py-2 bg-green-600 text-2xl font-semibold text-white m-2'>ADD PARTICIPENT</button>
                <button type='button' onClick={()=>{
                    setAddPopup(false)
                }} className=' px-4 py-2 bg-red-600 text-2xl font-semibold text-white my-4 m-2'>CLOSE</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default AddParticipants
