import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className="">
          <div className="">
            <Sidebar />
          </div>
          <div className="">
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout
