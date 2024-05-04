
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import API from '../../services/API'

const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    address:""
  })
  const onchange = (e) => {
    const {name, value} = e.target;
    setData((old_data)=>{
      return{
        ...old_data,
        [name]:value
      }
    })
  }
  const register = async(e)=> {
    e.preventDefault()
    try{
      const response = await API.post('auth/register', data)
      toast.success(response.data.message)
      navigate('/login')
    }catch(error){
      toast.error(error.response?.data.message)
    }
  }
  return (
    <div className='mx-auto w-1/3 border-2 border-slate-500'>
      <h1 className='flex justify-center font-medium'>Register form</h1>
      <div className="inputs p-4">
        <form onSubmit={register}>
          <input type="text" value={data.name} name='name' onChange={onchange} className='w-full border-b-2 border-slate-300 p-2 mb-2' placeholder='Name' />
          <input type="text" value={data.email} name='email' onChange={onchange} className='w-full border-b-2 border-slate-300 p-2 mb-2' placeholder='Email' />
          <input type="text" value={data.password} name='password' onChange={onchange} className='w-full border-b-2 border-slate-300 p-2 mb-2' placeholder='Password' />
          <button className='w-full py-2 bg-green-600 text-white font-normal'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
