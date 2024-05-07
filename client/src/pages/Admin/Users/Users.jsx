import React from 'react';
import './users.css'
import { useState, useEffect } from 'react';
import API from '../../../services/API'
import {toast} from 'react-toastify' 

function Users() {
    const [users, setUsers] = useState([])
    const [addPopup, setAddPopup] = useState(false)
    useEffect(()=>{
        async function getUsers(){
            try{
                const res = await API.get('admin/get-users')
                setUsers(res.data.users)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getUsers()
    }, [])
    const [participant, setParticipant] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        event:""
    })
    const onchange = (e) => {
        const {name, value} = e.target;
        setParticipant((old_data)=>{
            return {
                ...old_data,
                [name]:value
            }
        })
    }
    const addParticipant = async(e) => {
        e.preventDefault()
        try{
            await API.post('/register', participant)
            toast.success('Participant added successfully')
            setAddPopup(false)
        }catch(error){
            toast.error(error.response?.data.message)
        }
    }
    return (
        <div className="table-box">
            <div className="table-header">
                <p>USERS</p>
            </div>
            <div className="add-users">
              <button className="add-new" onClick={()=>{setAddPopup(true)}}>+ADD USERS</button>
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
            {users && users.map((user, index)=>{
                return (
            <div className="table-row">
                <div className="table-cell first-cell">
                    <p>{index+1}</p>
                </div>
                <div className="table-cell d">
                    <p>{user.name}</p>
                </div>
                <div className="table-cell">
                    <p>{user.email}</p>
                </div>
                <div className="table-cell">
                    <p>{user.phone}</p>
                </div>
                <div className="table-cell last-cell">
                    <p>{user.event}</p>
                </div>
            </div>)
            })}
            {addPopup && 
            <div className=" absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 z-50">
                <form onSubmit={addParticipant}>
                <div className=" w-4/5 bg-white h-auto my-8 mx-auto flex flex-col z-50 p-8">
                    <span className=' text-2xl text-slate-800 py-2'>NAME :</span>
                    <input className=' text-1xl text-black p-4 border-2 rounded border-black' value={participant.name} name="name" onChange={onchange} type="text" />
                    <span className=' text-2xl text-slate-800 py-2'>EMAIL :</span>
                    <input className=' text-1xl text-black p-4 border-2 rounded border-black' value={participant.email} name="email" onChange={onchange}/>
                    <span className=' text-2xl text-slate-800 py-2'>PHONE :</span>
                    <input className=' text-1xl text-black p-4 border-2 rounded border-black' value={participant.phone} name="phone" onChange={onchange} />
                    <span className=' text-2xl text-slate-800 py-2'>ADDRESS :</span>
                    <input className=' text-1xl text-black p-4 border-2 rounded border-black' value={participant.address} name="address" onChange={onchange}/>
                    <span className=' text-2xl text-slate-800 py-2'>EVENT :</span>
                    <input className=' text-1xl text-black p-4 border-2 rounded border-black' value={participant.event} name="event" onChange={onchange}/>
                    <div className="">
                        <button type='submit' className=' px-4 py-2 bg-green-600 text-2xl font-semibold text-white m-2'>ADD EVENT</button>
                        <button type='button' onClick={()=>{
                            setAddPopup(false)
                        }} className=' px-4 py-2 bg-red-600 text-2xl font-semibold text-white my-4 m-2'>CLOSE</button>
                    </div>
                </div>
                </form>
            </div>}
        </div>
    );
}

export default Users;