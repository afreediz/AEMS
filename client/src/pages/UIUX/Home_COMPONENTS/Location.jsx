import React,{ useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import API from '../../../services/API';
import { toast } from 'react-toastify'

const Location = () => {
    const zoom = 13;
    const [data, setData] = useState()
    useEffect(()=>{
        const getData = async()=> {
            try{
                const res = await API.get('/location')
                setData(res.data.locationPage)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getData()
    },[])
  return (
        <section id="location" className="location mt-32">
            <h1 className="heading"> LOCATION </h1>
            <div className="box">
                <div className="w-full  grid grid-cols-2">
                    <div className="map w-full col-span-1">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }} // Replace 'YOUR_API_KEY' with your actual API key
                            center={
                                data && {
                                    lng: data.location.coordinates[0],
                                    lat: data.location.coordinates[1]
                                }
                            }
                            defaultZoom={zoom}
                        >
                        </GoogleMapReact>
                    </div>
                    <div className=" p-8 col-span-1">
                        <h3>{data && data.heading}</h3>
                        <p>{data && data.content}</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Location
