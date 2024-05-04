import { Route, Routes, Outlet} from 'react-router-dom'
import {ToastContainer } from 'react-toastify'
import Home from './pages/UIUX/Home/Home'
import AdminProtected from './components/Route/AdminProtected'
import Dashboard from './pages/Admin/Dashboard'
import Login from './pages/Auth/Login'
import ForgetPassword from './pages/Auth/ForegetPassword'
import Layout from './components/UIUX/Layout'
import Events from './pages/UIUX/Events/Events'
import Contact from './pages/UIUX/Contact/Contact'

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/forget-password' element={<ForgetPassword />}/>
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