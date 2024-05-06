import React from 'react';
import './users.css'
function Users() {
    const [users, setUsers] = useState([])
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
    })
    return (
        <div className="table-box">
            <div className="table-header">
                <p>USERS</p>
            </div>
            <div className="add-users">
              <button className="add-new">+ADD USERS</button>
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
        </div>
    );
}

export default Users;