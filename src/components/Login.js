import React,{useState, useRef} from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import Header from './Header';

const Login = () => {

  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [isSigninForm, setIsSigninForm] = useState(false);

  const validateForm = () => {
    const auth = getAuth();
    if (isSigninForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(userCredential);
        // ...
        navigate('/browse');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
        // ..
      });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(userCredential);
          // ...
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(error);
          // ..
        });
    }
  };


  return (
    <div>
      <Header/>
      <img alt="demo" src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg"/>
      <form onSubmit={e=>e.preventDefault()} className='p-12 max-w-[400px] bg-black absolute left-[35%] top-[25%] text-white'>
        <h1 className='text-xl font-bold py-4'>{!isSigninForm ? 'Login' : 'Sign up' }</h1>
        <input ref={email} type="email" placeholder='Enter Email' className='p-2 m-2 w-full bg-gray-500 rounded-lg'/>
        <input ref={password} type="password" placeholder='Enter Password' className='p-2 m-2 w-full bg-gray-500 rounded-lg'/>
        <button onClick={()=>validateForm()} type="submit" className='p-4 m-4 bg-red-700 w-full rounded-lg'>{!isSigninForm ? 'Login' : 'Sign up' }</button>
        <p onClick={()=>setIsSigninForm(!isSigninForm)} className="cursor-pointer pt-2 text-center">{!isSigninForm ? 'New here ? Sign Up' : 'Already User? Login' }</p>
      </form>  
    </div>
  )
}

export default Login