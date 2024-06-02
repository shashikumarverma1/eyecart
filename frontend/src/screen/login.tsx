
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '../context/userDetails'

 const Login = () => {
   const [formData , setFormData]=useState({
    email:"",
    password:""
   })
   const {token, setToken } = useContext(UserInfo)
  const navigete=useNavigate()
 
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5500/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log(result.token , "res")
      if (response.ok) {
       await localStorage.setItem("token" , result.token)
       setToken(result.token)
        navigete('/')
        console.log('Login successful:', result);
      } else {
        console.log('Login failed:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
   <div style={{display:"flex" ,justifyContent:"center" , 
   padding:"10px"  ,marginTop:2}} className='bg-black-100' >
    
    <form onSubmit={(e)=>handleSubmit(e)} className='mt-5  '>      
      <input type="email" placeholder='Email'
       className='rounded w-full text-center bg-blue-50 p-2 px-3 m-1 py-2  ' 
       onChange={(e)=>setFormData({...formData , email:e.target.value})}
       /><br/>
       <input type="password" placeholder='Password' 
        className='rounded w-full text-center bg-blue-50  p-2 px-3 m-1 py-2 '
        onChange={(e)=>setFormData({...formData , password:e.target.value})}
        /><br/>
       <button type='submit' className=' rounded bg-blue-800 w-full text-center text-white p-2 px-3 m-1 py-2'>SignIn</button>
       <Link to='/Signup' className='rounded  w-full text-center text-blue-800 p-2 px-3 m-1 py-2'>Dont have account ? Signup</Link>
    </form>
    </div>
  
  )
}

export default Login