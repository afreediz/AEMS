import React, { useEffect, useState } from 'react'
import '../style.css'
import API from '../../../services/API'
import { toast } from 'react-toastify'
import {NavLink} from 'react-router-dom'
const Events = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    async function getData(){
      try{
        const response = await API.get('/events')
        setData(response.data.events)
      }catch(error){
        toast.error(error.response?.data.message)
      }
    }
    getData()
  },[])
  return (
    <section className=' my-32'>
      <h1 className="heading">EVENTS</h1>
      {data && data.map((event, index)=>{
        return (
          <div className=" my-16" key={index}>
            <h2 className='sub-heading'>{event.category_name}</h2>
            <div className="flex gap-12 flex-wrap w-full">
              {event.events.map((sub_event, index)=>{
                return (
                  <div className="custom-box" key={index}>
                    <h3 className=''>{sub_event.name}</h3>
                    <p>{sub_event.desc}</p>
                    <p>price : {sub_event.price}</p>
                    <p>date : {sub_event.date}</p>
                    <NavLink to="/register" className="btn"> Register </NavLink>
                  </div>
                )
              })}
            </div>
        </div>
      )})}
    </section>
  )
}

export default Events
