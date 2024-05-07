import React, { useEffect, useState } from 'react';
import './dashboard.css'
import { toast } from 'react-toastify'
import API from '../../../services/API'
import {Link} from 'react-router-dom'

function Dashboard() {
    const [data, setData] = useState()
    useEffect(()=>{
        async function getData(){
            try{
                const res = await API.get('admin/dashboard-details')
                setData(res.data.dashboard)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getData()
    },[])
    return (
        <div className="main">
            <div className="searchbar2">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search"
                />
                <div className="searchbtn">
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                        className="icn srchicn"
                        alt="search-button"
                    />
                </div>
            </div>

            <div className="box-container">
                <div className="box box1">
                    <div className="text">
                        <h2 className="topic-heading">EVENTS</h2>
                        <div className="flex">
                        <h2 className="topic-heading text-3xl font-bold">{data && data.events_count}+</h2>
                        <img className='mx-4' src= 
                        "data:image/png;base64,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"
						alt="Views"/> 
                        </div>
                    </div>
                </div>
                <div className="box box2">
                    <div className="text">
                        <h2 className="topic-heading">PARTICIPANTS</h2>
                        <div className="flex">
                        <h2 className="topic-heading text-3xl font-bold">{data && data.participants_count}+</h2>
                        <img className='mx-4'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUy56i0a0kYAqI_lNMeGXw0WHJ7nqZSw-xw&s"
                        alt="likes"
                        />
                        </div>
                    </div>
                </div>

                <div className="box box3">
                    <div className="text">
                        <div className="flex  flex-col">
                        <h2 className="topic-heading">REGISTRATION STATUS :</h2>
                        <div className="flex">
                        <h2 className=' text-3xl font-bold'>OPEN</h2>
                        <img className=' max-w-12'
                        src="https://cdn-icons-png.flaticon.com/512/5536/5536077.png"
                        alt="comments"
                        />
                        </div>
                        </div>
                        {/* <h2 className="topic">{data && data.registration_status}</h2> */}
                    </div>
                </div>
            </div>
            <div className='table-box'>
                <div className="add-userss">
                    <h2 className='text-2xl font-semibold text-blue-800'>RECENTLY JOINED PARTICIPATNS</h2>
                    <Link to='/admin/participants' >
                        <button className="add-new" >VIEW ALL</button>
                    </Link>
                </div>
                <div className="table-row table-head">
                    <div className="table-cell">
                        <p>ID</p>
                    </div>
                    <div className="table-cell">
                        <p>NAME</p>
                    </div>
                    <div className="table-cell">
                        <p>EMAIL</p>
                    </div>
                    <div className="table-cell">
                        <p>NUMBER</p>
                    </div>
                    <div className="table-cell">
                        <p>EVENT</p>
                    </div>
                </div>
                {data && data.participants.map((participant, index)=>{
                    return (
                <div className="table-row" key={index}>
                    <div className="table-cell">
                        <p>{index+1}</p>
                    </div>
                    <div className="table-cell d">
                        <p>{participant.name}</p>
                    </div>
                    <div className="table-cell">
                        <p>{participant.email}</p>
                    </div>
                    <div className="table-cell">
                        <p>{participant.phone}</p>
                    </div>
                    <div className="table-cell last-cell">
                        <p>{participant.event.name}</p>
                    </div>
                </div>)
                })}
            </div>

        </div>

    );
}

export default Dashboard;
