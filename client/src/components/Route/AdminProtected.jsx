import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminLayout from '../Admin/Layout';
import { useAuth } from '../../context/context';
import API from '../../services/API'

const AdminProtected = () => {
  const bool = localStorage.getItem('token') ? true : false;
  const [auth, setAuth] = useState(bool);
  const {setAdmin} = useAuth();
    useEffect(()=>{
      async function checkAuth(){
        try{
          const {data} = await API.get('admin/get-admin')
          setAdmin(data.admin)
          setAuth(true)
        }catch({response}){
            setAdmin(null)
            setAuth(false)
            localStorage.removeItem('token');
        }   
      }
      checkAuth()
    },[])
    return (auth?<AdminLayout><Outlet /></AdminLayout>:<Navigate to='/login' />)
}

export default AdminProtected