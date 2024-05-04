import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Admin/Navbar';
import AdminLayout from '../Admin/Layout';
import { useAuth } from '../../context/context';
import API from '../../services/API'

const AdminProtected = () => {
  const bool = localStorage.getItem('token') ? true : false;
  const [auth, setAuth] = useState(bool);
  const {setUser} = useAuth();
    useEffect(()=>{
      async function checkAuth(){
        try{
          const {data} = await API.get('admin/get-admin')
          setUser(data.user)
          setAuth(true)
        }catch({response}){
            setAuth(false)
            setUser(null)
            localStorage.removeItem('token');
        }   
      }
      checkAuth()
    },[])
    return (auth?<AdminLayout><Outlet /></AdminLayout>:<Navigate to='/login' />)
}

export default AdminProtected