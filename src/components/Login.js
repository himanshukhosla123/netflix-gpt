import React,{useState, useRef} from 'react'

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const validateForm = () => {
    console.log(email.current.value,password.current.value);
  };

  return (
    <div>
      <img alt="demo" src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg"/>
      <form onSubmit={e=>e.preventDefault()} className='p-12 max-w-[400px] bg-black absolute left-[35%] top-[25%] text-white'>
        <h1 className='text-xl font-bold py-4'>Sign In</h1>
        <input ref={email} type="email" placeholder='Enter Email' className='p-2 m-2 w-full bg-gray-500 rounded-lg'/>
        <input ref={password} type="password" placeholder='Enter Password' className='p-2 m-2 w-full bg-gray-500 rounded-lg'/>
        <button onClick={()=>validateForm()} type="submit" className='p-4 m-4 bg-red-700 w-full rounded-lg'>Login</button>
      </form>  
    </div>
  )
}

export default Login