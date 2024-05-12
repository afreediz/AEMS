import React,{ useEffect, useState } from 'react'
import API from '../../../services/API';
import { toast } from 'react-toastify'

const Contact = () => {
    const [data, setData] = useState()
    useEffect(()=>{
        const getData = async()=> {
            try{
                const res = await API.get('/contact')
                setData(res.data.contactPage)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getData()
    },[])
  return (
    <div>
      <h3 className='heading mt-40'>CONTACTS <span>US</span> :</h3>
      <div className=" py-8 px-40 text-4xl">
        <div className="contacts">
            <h2 className=' text-6xl font-semibold py-4'>General</h2>
            <div className="">
                {data && data.contact_info.map((contact, index)=>{
                    return <div className=' py-2' key={index} href="#"> <i className={`fas fa-${contact.type}`}></i> {contact.content} </div>
                })}
                </div>
        </div>
        <div className="socia-medias">
            <h2 className=' text-6xl font-semibold py-4'>Social Media</h2>
            <div className="">
                {data && data.social_medias.map((media, index)=>{
                    return <div className=' py-2' key={index} href="#"> <i className={`fab fa-${media.type}`}></i> {media.content} </div>
                })} 
                <i className='fas fa-instagram'></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
