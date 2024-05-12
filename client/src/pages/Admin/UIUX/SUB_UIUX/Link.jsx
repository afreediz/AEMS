import React, { useEffect, useState } from 'react'
import API from '../../../../services/API'
import { toast } from 'react-toastify'


const Link = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    const getData = async()=> {
      try{
        const response = await API.get('/contact')
        setData(response.data.contactPage)
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
      const response = await API.put('/admin/uiux/contact-page', {...data})
      toast.success(response.data.message)
    }catch(error){
      toast.error(error.response?.data.message)
    }
  }
  const [contact, setContact] = useState({
    type:"",
    content:""
  })
  const add_contact = ()=> {
    setData({...data, contact_info:[...data.contact_info, contact]})
  }
  const [media, setMedia] = useState({
    type:"",
    content:""
  })
  const add_media = ()=> {
    setData({...data, social_medias:[...data.social_medias, media]})
  }
  return (
       <form onSubmit={on_submit} className="edit-links mb-16 w-full">
            <h1 className=' text-6xl my-4 text-[4rem] font-semibold gap-4'>LINKS</h1>
            <div onSubmit={on_submit} className="grid grid-cols-6 gap-4 w-full">
                <div className=" col-span-3">
                    <h2 className='text-3xl my-4 font-semibold'>CONTACTS</h2>
                    {data && data.contact_info.map((contact, index)=>{
                      return (
                        <div key={index} className="w-full bg-slate-500 my-3 text-white p-4 text-2xl flex justify-between">{contact.content} <button className=' text-red-500' onClick={()=>{setData({...data, contact_info:data.contact_info.filter((item, i)=>i!==index)})}} type='button'>delete</button></div>
                      )
                    })}
                    <div className="grid grid-cols-5 w-full">
                      <input value={contact.content} onChange={(e)=>{setContact({...contact, content:e.target.value})}} name='contact' type="text" className=' col-span-4 m outline outline-slate-700 mb-4 rounded border-2 border-slate-500 p-2 w-full'/> 
                      <select  className=' col-span-1' onChange={(e)=>{setContact({...contact, type:e.target.value})}} name="type" id="">
                        <option selected value="phone">phone</option>
                        <option value="envelope">email</option>  
                      </select> 
                    </div>
                    <button onClick={add_contact} type='button' className=' px-6 py-3 bg-blue-600 text-2xl font-semibold text-white w-full'>ADD CONTACT</button>
                </div>
                <div className=" col-span-3">
                    <h2 className='text-3xl my-4 font-semibold'>SOCIAL MEDIAS</h2>
                    {data && data.social_medias.map((media, index)=>{
                      return (
                        <div key={index} className="w-full bg-slate-500 my-3 text-white p-4 text-2xl flex justify-between">{media.content} <button className=' text-red-500' onClick={()=>{setData({...data, social_medias:data.social_medias.filter((item, i)=>i!==index)})}} type='button' >delete</button></div>
                      )
                    })}
                    <div className="grid grid-cols-5 w-full">
                      <input value={media.content} onChange={(e)=>{setMedia({...media, content:e.target.value})}} name='contact' type="text" className=' col-span-4 m outline outline-slate-700 mb-4 rounded border-2 border-slate-500 p-2 w-full'/> 
                      <select onChange={(e)=>{setMedia({...media, type:e.target.value})}} className=' col-span-1' name="type" id="">
                        <option selected value="instagram">instagram</option>  
                        <option value="facebook">facebook</option>
                        <option value="linkedin">linkedin</option>
                        <option value="twitter">twitter</option>
                      </select> 
                    </div>
                    <button onClick={add_media} type='button' className=' px-6 py-3 bg-blue-600 text-2xl font-semibold text-white w-full'>ADD MEDIA</button>
                </div>
            </div>
            <button type='submit' className=' px-8 py-4 bg-green-600 text-3xl font-semibold text-white m-2'>UPDATE</button>
        </form>
  )
}

export default Link
