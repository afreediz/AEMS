import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import API from '../../services/API'
import { useAuth } from '../../context/context';
import UserLayout from '../User/Layout';
import { toast } from 'react-toastify';

const Protected = () => {
    const bool = localStorage.getItem('token') ? true : false;
    const [auth, setAuth] = useState(bool);
    const {setUser} = useAuth();
    useEffect(()=>{
      async function checkAuth(){
        try{
          const {data} = await API.get('user/get-user')
          setUser(data.user)
          setAuth(true)
        }catch(error){
            toast.error(error.response?.data.message);
            setAuth(false)
            setUser(null)
            localStorage.removeItem('token');
        }   
      }
      checkAuth()
    },[])
    return (auth?<UserLayout><Outlet /></UserLayout>:<Navigate to='/login' />)
}

export default Protected