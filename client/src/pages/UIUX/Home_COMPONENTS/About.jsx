import React, { useEffect, useState } from 'react'
import API from '../../../services/API';
import { toast } from 'react-toastify';
import AboutImage from './03.gif'

const About = () => {
    const [data, setData] = useState()
    useEffect(()=>{
        const getData = async()=> {
            try{
                const res = await API.get('/about-us')
                setData(res.data.aboutUsPage)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getData()
    },[])
  return (
      <section className="about" id="about">
          <h1 className="heading"> <span>ABOUT</span> US </h1>
          <div className="row">
              <div className="image">
                  <img src={AboutImage} alt="" width="400" height="300" />
              </div>
              <div className="content">
                  <h3>{data && data.heading}</h3>
                  <p>{data && data.content}</p>
                  <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
              </div>
          </div>
      </section>
  )
}

export default About
