import { createContext, useContext, useState } from 'react'

export const adminContext = createContext()

export const AdminContextProvider = ({children}) => {
    const [admin, setAdmin] = useState()
    return (
        <adminContext.Provider value={{admin, setAdmin}}>
            {children}
        </adminContext.Provider>
    )
}

export const useAuth = () => useContext(adminContext)

export default AdminContextProvider