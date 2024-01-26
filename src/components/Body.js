import React,{useEffect} from 'react'
import { createBrowserRouter,RouterProvider,useNavigate } from 'react-router-dom'
import Login from './Login'
import Header from './Header'
import Browse from './Browse'
import { addUser, removeUser } from '../utils/userSlice';
import {onAuthStateChanged} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {auth} from './../utils/firebase';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Login/>
  },
  {
    path:"/browse",
    element: <Browse/>
  }
])


const Body = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, user => {
      console.log(user);
      if(user) {
        dispatch(addUser({uid : user.uid, email: user.email, displayName: user.displayName}));
        // navigate('/browser');
      }
      else {
        dispatch(removeUser());
        // navigate('/');
      }
    })
  },[])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body