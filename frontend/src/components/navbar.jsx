import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'

const Navbar = ({user,setUser}) => {
    const navigate=useNavigate()
    const hendleLogout=()=>{
        localStorage.removeItem("token");
        setUser(null)
        navigate('/login')
    }
  return (
    <nav className='bg-gray-800 p-4 text-white shadow-2xl '>
        <div className='container mx-auto  flex items-center 
        justify-between  '> 
        <Link  to='/' className='text-2xl'>TestAing Notes</Link>
        
        
        {user &&(
            
            <div className='flex items-center space-x-4 '>
                <span className='text-gray-300 text-xl font-semibold shadow-2xl '>{user.username}</span>
                <button onClick={hendleLogout} className='bg-blue-500 text-white  px-3 py-1 rounded-md hover:bg-blue-700'>Logout</button>
            </div>
        )}
        </div>
       </nav>
  )
}

export default Navbar