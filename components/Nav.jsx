"use client" 
import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

 
const Nav = () => {
   const isUserIsLoggedIn = true;
   const [providers,setProviders] = useState(null);
   const [toggleDropDown,setToggleDropDown] = useState(false);
   useEffect(()=>{
    const setProviders = async()=>{
        const response = await getProviders()
        setProviders(response)
    }
    setProviders()
   },[])
    return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' alt="logo" width={30} height={30} />
            <p className='logo_text'>Share & Prompt</p>
        </Link> 

        {/* Desktop Nav  */}
        <div className='sm:flex hidden'>{isUserIsLoggedIn ?
            (<div className='flex gap-3 md:gap-5'>
                <Link href='/create-prompt' className='black_btn'>Create poste</Link>
                <button type="button" onClick={signOut} className='outline_btn'>Sign Out</button>
                <Link href='/profile'>
                    <Image src='/assets/images/logo.svg' width={37} height={37} className='rounded-full' alt='profilePicture'/>
                </Link>
                </div> )
            :(<>
                {providers && Object.values(providers).map((provider)=>(
                    <button type='button' className='black_btn' key={provider.id} onClick={()=>{signIn(provider.id)}}>Sign Out</button>))}
            </>) }
        </div>

        {/* Mobile Nav */}

        <div className="sm:hidden flex relative">  
            {isUserIsLoggedIn ?(
                <div className='flex'>
                    <Image src='/assets/images/logo.svg' onClick={()=>{setToggleDropDown((prev)=>!prev)}} className='rounded-full'width={37} height={37} alt='profilePicture'/>

                </div>
            ):(
                <>
                {providers && Object.values(providers).map((provider)=>(
                    <button type='button' className='black_btn' key={provider.id} onClick={()=>{signIn(provider.id)}}>Sign Out</button>))}
            
                </>
            )

            }           
        </div>
    </nav>
  )
}

export default Nav