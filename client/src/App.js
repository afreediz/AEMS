import { Route, Routes} from 'react-router-dom'
import {ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import AdminProtected from './components/Route/AdminProtected'
import Dashboard from './pages/Admin/Dashboard'
import Login from './pages/Auth/Login'
import ForgetPassword from './pages/Auth/ForegetPassword'

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route index element={<Home />} />
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