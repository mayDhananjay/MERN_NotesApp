import { useState,useEffect } from 'react'
import Navbar from './components/navbar'
import { Routes,Route,Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import axios from 'axios'
import SharePage from './components/SharePage'


function App() {
  const [user,setUser]=useState(null)
  const [loading ,setLoading] =useState((true))
  const apiUrl = import.meta.env.VITE_API_URL || "";
  useEffect(()=>{
    const fetchUser=async()=>{
    try{
      const token = localStorage.getItem("token");
      if (!token){
        setLoading(false);
        return;
      }
      const 
      {data}= await axios.get(`${apiUrl}/api/users/me`,{
        headers:{Authorization: `Bearer ${token}`}
      })
      setUser(data)
    }catch{
      localStorage.removeItem("token")

    }
    finally{
      setLoading(false);
    }
  }
  fetchUser();


  },[apiUrl]);
  if(loading){
    return(
      <div className=' min-h-screen bg-gray-900 flex items-center justify-center'>
        <div className='text-xl text-white'>Loading...</div>
      </div>
    )
  }
  
 

  return (
    
    <div className='min-h-screen bg-gray-500'>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/login" element={user ? <Navigate to='/' />:<Login setUser={setUser}/> } />
         <Route path="/register" element={user ? <Navigate to='/' />:<Register setUser={setUser}/> } />
         <Route path ="/" element={user ? <Home />:<Navigate to ='/login' />}      />
        <Route path="/share/:id" element={<SharePage />} />
      </Routes>
      
      </div>

    
  )
}


export default App
