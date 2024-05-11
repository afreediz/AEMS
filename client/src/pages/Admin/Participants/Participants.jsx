import React from 'react';
import './participants.css'
import { useState, useEffect } from 'react';
import API from '../../../services/API'
import {toast} from 'react-toastify' 
import AddParticipants from './AddParticipants';

function Participants() {
    const [participants, setParticipants] = useState()
    console.log(participants);
    console.log(participants);
    const [addPopup, setAddPopup] = useState(false)
    useEffect(()=>{
        async function getParticipants(){
            try{
                const res = await API.get('admin/participants')
                setParticipants(res.data.participants)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getParticipants()
    }, [])
    const delete_participant = async(id)=>{
        try{
            await API.delete(`admin/participants/${id}`)
            setParticipants((old_participants)=>{
                return old_participants.filter((participant)=>{
                    return participant._id != id
                })
            })
        }catch(error){
            toast.error(error.response?.data.message)
        }
    }
    return (
        <div className="table-box">
            <div className="table-header">
                <p>PARTICIPANTS</p>
            </div>
            <div className="add-users">
              <button className="add-new" onClick={()=>{setAddPopup(true)}}>+ADD PARTICIPANT</button>
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
                <div className="table-cell">
                    <p className=' mx-5'>OPERATION</p>
                </div>
            </div>
            {participants && participants.map((participant, index)=>{
                return (
            <div className="table-row">
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
                    <p>{participant.event?.name}</p>
                </div>
                <div className="table-cell last-cell">
                    <button className=' text-white px-4 py-2 bg-red-600 mx-5' onClick={()=>{delete_participant(participant._id)}}>delete</button>
                </div>
            </div>)
            })}
            {addPopup && <AddParticipants setAddPopup={setAddPopup} setParticipants={setParticipants} />}
        </div>
    );
}

export default Participants;