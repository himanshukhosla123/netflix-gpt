import React from 'react'
import {auth} from './../utils/firebase';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const onSignOut = () => {
    signOut(auth)
    .then(()=>{
      dispatch(removeUser());
      navigate('/');
    })
    .catch(err=>console.error(err))
  }

  return (
    <div className='fixed flex justify-between z-10 top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black'>
      <div>
        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' className='max-w-[120px]'/>
      </div>
      {user ? <div className='flex items-center text-bold text-white'>
        <img alt="usericons" className='max-w-[40px] pr-2' src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=40"/> 
        <button onClick={()=>onSignOut()}>Sign Out</button>
      </div>: null}
    </div>
  )
}

export default Header