import { Route, Routes} from 'react-router-dom'
import {ToastContainer } from 'react-toastify'
import Home from './pages/User/Home'
import Protected from './components/Route/Protected'
import AdminProtected from './components/Route/AdminProtected'
import Profile from './pages/User/Profile'
import Dashboard from './pages/Admin/Dashboard'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgetPassword from './pages/Auth/ForegetPassword'

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forget-password' element={<ForgetPassword />}/>
        <Route path="/user" element={<Protected />} >
          <Route index element={<Home />} />
          <Route path='/user/profile' element={<Profile />} />
        </Route>
        <Route path='/admin' element={<AdminProtected />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='*' element={<div className=''>Not found</div>} />
      </Routes>
      <ToastContainer position='bottom-center' />
    </div>
  )
}

export default App