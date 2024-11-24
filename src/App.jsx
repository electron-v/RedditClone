import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth';
import { login,logout } from './store/authSlices';
import { Header } from './components';
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData));
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false));

  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-white'>
      <div className='w-full'>
        
        <Header /> 
        <main>
        <Outlet />
        </main>
      </div>
    </div>
  ) : null


}

export default App
