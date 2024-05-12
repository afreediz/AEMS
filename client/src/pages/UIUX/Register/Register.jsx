import React, { useEffect, useState } from 'react'
import RegisterImage from './images.png'
import API from '../../../services/API'
import { toast } from 'react-toastify'
import '../style.css'
const Register = () => {
  const [events, setEvent] = useState()
  useEffect(()=>{
    async function getEvents(){
      try{
        const response = await API.get('/register-events')
        setEvent(response.data.events)
      }catch(error){
        toast.error(error.response?.data.message)
      }
    }
    getEvents()
  }, [])
  const [data, setData] = useState({
    name:"",
    email:"",
    phone:"",
    address:""
  })
  const on_change = (e) =>{
    setData({...data, [e.target.name]:e.target.value})
  }
  const [selectedEvent, setSelectedEvent] = useState()
  const clear_inputs = () =>{
    setData({
      name:"",
      email:"",
      phone:"",
      address:""
    })
  }
  const [ticket, setTicket] = useState()
  const register = async(e) => {
    e.preventDefault()
    try{
      const res = await API.post('/register', {
        ...data,
        event:selectedEvent
      })
      setTicket(res.data.participant._id)
      setTimeout(()=>{
        clear_inputs()
      }, 1000)
      toast.success(res.data.message)
    }catch(error){
      toast.error(error.response?.data.message)
    }
  }
  return (
    <section className="register my-32" id="register">
      <h1 className="heading"> <span>Register</span> now </h1>
      <div className="row">
          <div className="image">
              <img src={RegisterImage} alt="" />
          </div>
        <form onSubmit={register}>
            <h3>Register </h3>
            <span className="text-3xl font-semibold py-4">{ticket && `Ticket Id : ${ticket}`}</span>
            <input onChange={on_change} value={data.name} type="text" name="name" placeholder="your name" className="" />
            <input onChange={on_change} value={data.phone} type="number" name="phone" placeholder="your number" className="" />
            <input onChange={on_change} value={data.email} type="email" name="email" placeholder="your email" className="" />
            <input onChange={on_change} value={data.address} type="address" name="address" placeholder="your college" className="" />
            <select name="event" value={selectedEvent} onChange={(e)=>{setSelectedEvent(e.target.value)}} id="">
              <option  >select</option>
              {events && events.map((event, index)=>{
                  return <option value={event._id} key={index}>{event.name}</option>
              })}
            </select>
            <input type="submit" name="submit" value="submit" className="btn" />
        </form>
      </div>
    </section>
  )
}

export default Register
