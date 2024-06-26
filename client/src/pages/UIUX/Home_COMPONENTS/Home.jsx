import React, { useEffect, useState } from 'react'
import HomeGif from "./home.gif"
import API from '../../../services/API';
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom';
const Home = () => {
    const [data, setData] = useState()
    useEffect(()=>{
        const getData = async()=> {
            try{
                const res = await API.get('/home')
                setData(res.data.homePage)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getData()
    },[])
    return (
      <section className="home" id="home">
          <div className="image">
              <img src={HomeGif} alt="" />
          </div>
          <div className="content">
              <h3>{data && data.fest_name} : {data && data.fest_quote}</h3>
              <p>{data && data.fest_desc}</p>
              <NavLink to="/register" className="btn"> Register now <span className="fas fa-chevron-right"></span> </NavLink>
          </div>
      </section>
  )
}

export default Home
