import { Route, Routes, Outlet} from 'react-router-dom'
import {ToastContainer } from 'react-toastify'
import UIUX from './pages/UIUX/UIUX'
import AdminProtected from './components/Route/AdminProtected'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import Login from './pages/Auth/Login/Login'
import ForgetPassword from './pages/Auth/ForgetPassword/ForegetPassword'
import Layout from './components/UIUX/Layout'
import Events from './pages/UIUX/Events/Events'
import Register from './pages/UIUX/Register/Register'
import AdminEvents from './pages/Admin/Events/Events'
import Mail from './pages/Admin/Mail/Mail'
import Certificate from './pages/Admin/Certificate/Certificate'
import Categories from './pages/Admin/Categories/Categories'
import Participants from './pages/Admin/Participants/Participants'
import AdminUIUX from './pages/Admin/UIUX/UIUX'
import Contact from './pages/UIUX/Contact/Contact'

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<UIUX />} />
          <Route path='/events' element={<Events />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

        <Route path='/login' element={<Login />}/>
        <Route path='/forget-password' element={<ForgetPassword />}/>

        <Route path='/admin' element={<AdminProtected />}>
          <Route index element={<Dashboard />} />
          <Route path='/admin/events' element={<AdminEvents />} />
          <Route path='/admin/participants' element={<Participants />} />
          <Route path='/admin/mail' element={<Mail />} />
          <Route path='/admin/certificate' element={<Certificate />} />
          <Route path='/admin/categories' element={<Categories />} />
          <Route path='/admin/uiux' element={<AdminUIUX />} />
        </Route>

        <Route path='*' element={<div className=''>Not found</div>} />
      </Routes>
      <ToastContainer position='bottom-center' />
    </div>
  )
}

export default App