import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div className='d-flex w-100 vh-100'>
     
      <div className='Welcome w-50 d-flex justify-content-center align-items-center text-light text-center'>
        <div>
          <h1 className=''>Welcome</h1><h3>ABC School Management System</h3>  
        </div>  
      </div>
      <div className='Login w-50 d-flex justify-content-center align-items-center'>
          
          <form action="" className='LoginForm p-5 w-75'>
          <div className='text-light'>
          <h2 className='text-center'>Login</h2>
          
            <div className=''>
             <label htmlFor="UserId" className='p-1'>User ID :</label>
             <br />
             <input type="text" id='UserId' className='w-100 p-2' placeholder='Enter User ID'/>
            </div>
          <div className='mt-3'>
             <label htmlFor="Pwd" className='p-1'>Password :</label>
             <br />
             <input type="text" id='Pwd' className='w-100 p-2' placeholder='Enter Password'/>
          </div>
          <button className='btn LoginBtn w-100 mt-4'>Login</button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Login