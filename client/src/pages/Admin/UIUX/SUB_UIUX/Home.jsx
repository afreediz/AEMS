import React, { useEffect, useState } from 'react'
import API from '../../../../services/API'
import { toast } from 'react-toastify'
const Home = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    const getData = async()=> {
      try{
        const response = await API.get('/home')
        setData(response.data.homePage)
      }catch(error){
        toast.error(error.response?.data.message)
      }
    }
    getData()
  }, [])
  const on_change = (e)=> {
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }
  const on_submit = async(e)=> {
    e.preventDefault()
    try{
      const response = await API.put('/admin/uiux/home-page', {...data})
      toast.success(response.data.message)
    }catch(error){
      toast.error(error.response?.data.message)
    }
  }
  return (
    <div className="edit-home">
        <h1 className=' text-6xl my-4 font-semibold'>HOME PAGE</h1>
        <form onSubmit={on_submit} className="w-full">
            <input name='fest_name' onChange={on_change} value={data && data.fest_name} type="text" className='m outline outline-slate-700 mb-4 rounded border-2 border-slate-500 p-4 w-full'/>
            <input name='fest_quote' onChange={on_change} value={data && data.fest_quote} type="text" className='m outline outline-slate-700 mb-4 rounded border-2 border-slate-500 p-4 w-full'/>
            <textarea name="fest_desc" onChange={on_change} value={data && data.fest_desc} className=' text-1xl text-black p-4 rounded outline outline-slate-700 w-full' id="" cols="30" rows="10"></textarea>
            <button type='submit' className=' px-8 py-4 bg-green-600 text-3xl font-semibold text-white m-2'>UPDATE</button>
        </form>
    </div>
  )
}

export default Home
