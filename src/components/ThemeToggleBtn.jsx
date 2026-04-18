import React, { useEffect } from 'react'
import assets from '../assets/assets';

const ThemeToggleBtn = ({theme, setTheme}) =>{

  useEffect(()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; //Browser/OS ki setting check karta hai — kya user ne apne system mein dark mode enable kiya hua hai? Agar haan toh true, nahi toh false.
    setTheme( theme || (prefersDarkMode ? 'dark' : 'light')) //Pehle dekho — kya theme already set hai? (jaise localStorage se) Agar haan → wahi use karo (theme), warna system preference ke hisaab se set karo”
  },[]) 

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme',theme)
  },[theme])
  return (
    <div>
        <button>
          {theme === 'dark' ? (
            <img onClick={()=> setTheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />
          ):(
            <img onClick={()=> setTheme('dark')} src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />
          ) }
        </button>
    </div>
  )
}

export default ThemeToggleBtn;