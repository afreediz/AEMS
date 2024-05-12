import React, { useEffect, useState } from 'react'
import API from '../../../../services/API'
import { toast } from 'react-toastify'


const Location = () => {
    const [data, setData] = useState()
    useEffect(()=>{
      const getData = async()=> {
        try{
          const response = await API.get('/location')
          setData({
            heading:response.data.locationPage.heading,
            content:response.data.locationPage.content,
            long:response.data.locationPage.location.coordinates[0],
            lat:response.data.locationPage.location.coordinates[1]
          })
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
        const response = await API.put('/admin/uiux/location-page', {
          heading:data.heading,
          content:data.content,
          location:{
            type:"Point",
            coordinates:[parseFloat(data.long), parseFloat(data.lat)]
          }
        })
        toast.success(response.data.message)
      }catch(error){
        toast.error(error.response?.data.message)
      }
    }
  return (
        <div className="edit-location">
            <h1 className=' text-6xl my-4 text-[4rem] font-semibold gap-4'>LOCATION</h1>
            <form onSubmit={on_submit} className="w-full">
                <div className=" text-2xl font-semibold">
                    longitude : <input name='long' onChange={on_change} value={data && data.long} type="text" className='mx-2 outline outline-slate-700 mb-4 rounded border-2 border-slate-500 p-4 w-40'/> <br />
                    latitude : <input name='lat' onChange={on_change} value={data && data.lat} type="text" className=' mx-2 outline outline-slate-700 mb-4 rounded border-2 border-slate-500 p-4 w-40'/>
                </div>
                <input name='heading' onChange={on_change} value={data && data.heading} type="text" className='m outline outline-slate-700 mb-4 rounded border-2 border-slate-500 p-4 w-full'/>
                <textarea name="content" onChange={on_change} value={data && data.content} className=' text-1xl text-black p-4 rounded outline outline-slate-700 w-full' id="" cols="30" rows="10"></textarea>
                <button type='submit' className=' px-8 py-4 bg-green-600 text-3xl font-semibold text-white m-2'>UPDATE</button>
            </form>
        </div>
  )
}

export default Location
