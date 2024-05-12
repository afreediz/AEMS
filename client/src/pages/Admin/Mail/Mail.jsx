import React from 'react'
import './mail.css'
import API from '../../../services/API'
import {toast} from 'react-toastify' 
import { useState } from 'react'
const Mail = () => {
  const [data, setData] = useState({
    email:"",
    subject:"",
    message:""
  })
  const on_change = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }
  const sendMail = async(e) => {
    e.preventDefault()
    try{
        const res = await API.post('/admin/send-mail', data)
        toast.success(res.data.message)
    }catch(error){
        toast.error(error.response?.data.message)
    }
  }
  return (
    <div className=' text-3xl'>
      <div className="table-header">
        <p>GENERATE CERTIFICATE</p>
      </div>
      <form onSubmit={sendMail}>
      <div className="container flex flex-col mx-auto my-8 max-w-7xl col-span-5">
          <span>EMAIL</span>
          <input onChange={on_change} name='email' type="text" className='outline outline-slate-700 mb-4  rounded border-2 border-slate-500 p-4 max-w-40:'/>
          <span>SUBJECT</span>
          <input onChange={on_change} name='subject' type="text" className='outline outline-slate-700 mb-4  rounded border-2 border-slate-500 p-4 max-w-40:'/>
          <span>MESSAGE</span>
          <textarea onChange={on_change} cols="30" rows="10" name='message' type="text" className='outline outline-slate-700 mb-4  rounded border-2 border-slate-500 p-4 max-w-40:'/>
          <button type='submit' className=' py-2 px-4 bg-green-600 text-white text-2xl font-semibold'>SEND MAIL</button>
        </div>
        </form>
    </div>
  )
}

export default Mail
