import React, { useEffect } from 'react';
import './events.css';

function Events() {
    const [events, setEvents] = useState([])
    useEffect(()=>{
        async function getEvents(){
            try{
                const res = await API.get('admin/get-events')
                setEvents(res.data.events)
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getEvents()
    })
    return (
        <div>
            <div className="table-box">
                <div className="table-header">
                    <p>EVENTS</p>
                </div>
                <div className="add-event">
                  <button className="add-new">+ADD EVENTS</button>
                </div>
                <div className="table-row table-head">
                    <div className="table-cell">
                        <p>ID</p>
                    </div>
                    <div className="table-cell">
                        <p>NAME</p>
                    </div>
                    <div className="table-cell">
                        <p>DATE</p>
                    </div>
                    <div className="table-cell">
                        <p>NUMBER OF PARTICIPANTS</p>
                    </div>
                </div>
                {events && events.map((event, index)=>{
                    return (
                        <div className="table-row">
                            <div className="table-cell first-cell">
                                <p>{index+1}</p>
                            </div>
                            <div className="table-cell d">
                                <p>{event.name}</p>
                            </div>
                            <div className="table-cell">
                                <p>{event.date}</p>
                            </div>
                            <div className="table-cell last-cell">
                                <p>{event.participants_count}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Events;
