import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className=" grid grid-cols-12">
          <div className=" col-span-2">
            <Sidebar />
          </div>
          <div className=" col-span-10">
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout
