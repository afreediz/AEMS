import React from 'react';
import './participants.css'
import { useState, useEffect } from 'react';
import API from '../../../services/API'
import {toast} from 'react-toastify' 
import AddParticipants from './AddParticipants';

function Participants() {
    const [participants, setParticipants] = useState([])
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
                    <p>{participant.event.name}</p>
                </div>
            </div>)
            })}
            {addPopup && <AddParticipants setAddPopup={setAddPopup} setParticipants={setParticipants} />}
        </div>
    );
}

export default Participants;