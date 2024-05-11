import React, { useEffect, useState } from 'react'
import API from '../../../../services/API'
import { toast } from 'react-toastify'


const About = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    const getData = async()=> {
      try{
        const response = await API.get('/about-us')
        setData(response.data.aboutUsPage)
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
      const response = await API.put('/admin/uiux/about-page', {...data})
      toast.success(response.data.message)
    }catch(error){
      toast.error(error.response?.data.message)
    }
  }
  return (
        <div className="edit-about">
            <h1 className=' text-6xl my-4 text-[4rem] font-semibold'>ABOUT PAGE</h1>
            <form onSubmit={on_submit} className="w-full">
                <input name='heading' onChange={on_change} value={data && data.heading} type="text" className='m outline outline-slate-700 mb-4 rounded border-2 border-slate-500 p-4 w-full'/>
                <textarea name="content" onChange={on_change} value={data && data.content} className=' text-1xl text-black p-4 rounded outline outline-slate-700 w-full' id="" cols="30" rows="10"></textarea>
                <button type='submit' className=' px-8 py-4 bg-green-600 text-3xl font-semibold text-white m-2'>UPDATE</button>
            </form>
        </div>
  )
}

export default About
