import React from 'react'
import './categories.css'
import { useState, useEffect } from 'react';
import API from '../../../services/API'
import {toast} from 'react-toastify' 
const Categories = () => {
    const [categories, setCategories] = useState([])
    const [addPopup, setAddPopup] = useState(false)
    useEffect(()=>{
        async function getCategoires(){
            try{
                const res = await API.get('admin/categories')
                setCategories(res.data.categories)
                console.log(res.data);
            }catch(error){
                toast.error(error.response?.data.message)
            }
        }
        getCategoires()
    }, [])
    const [add_category, setAdd_category] = useState({
        name:"",
    })
    const onchange = (e) => {
        setAdd_category({"name":e.target.value})
    }
    const addCategory = async(e) => {
        e.preventDefault()
        try{
            const res = await API.post('/admin/categories', add_category)
            toast.success(res.data.message)
            setCategories((old_categories)=>{
                return [
                    ...old_categories,
                    res.data.category
                ]
            })
            setAddPopup(false)
        }catch(error){
            toast.error(error.response?.data.message)
        }
    }
  return (
    <div className="table-box">
            <div className="table-header">
                <p>CATEGOREIS</p>
            </div>
            <div className="add-users">
              <button className="add-new" onClick={()=>{setAddPopup(true)}}>+ADD CATEGORY</button>
            </div>
            <div className="table-row table-head">
                <div className="table-cell">
                    <p>index</p>
                </div>
                <div className="table-cell">
                    <p>NAME</p>
                </div>
            </div>
            {categories && categories.map((category, index)=>{
                return (
            <div className="table-row">
                <div className="table-cell d text-center">
                    <p>{index+1}</p>
                </div>
                <div className="table-cell d text-center">
                    <p>{category.name}</p>
                </div>
            </div>)
            })}
            {addPopup && 
            <div className=" absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 z-50">
                <form onSubmit={addCategory}>
                <div className=" w-4/5 bg-white h-auto my-8 mx-auto flex flex-col z-50 p-8">
                    <span className=' text-2xl text-slate-800 py-2'>NAME :</span>
                    <input className=' text-1xl text-black p-4 border-2 rounded border-black' value={add_category.name} name="name" onChange={onchange} type="text" />
                    <div className="">
                        <button type='submit' className=' px-4 py-2 bg-green-600 text-2xl font-semibold text-white m-2'>ADD EVENT</button>
                        <button type='button' onClick={()=>{
                            setAddPopup(false)
                        }} className=' px-4 py-2 bg-red-600 text-2xl font-semibold text-white my-4 m-2'>CLOSE</button>
                    </div>
                </div>
                </form>
            </div>}
        </div>
  )
}

export default Categories
