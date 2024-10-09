"use client" 
import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

 
const Nav = () => {
    const {data:session} = useSession();
    const [providers,setProviders] = useState(null);
    const [toggleDropDown,setToggleDropDown] = useState(false);
   useEffect(()=>{
    const setUpProviders = async()=>{
        const response = await getProviders()
        setProviders(response)
    }
    setUpProviders()
   },[])
    return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' alt="logo" width={30} height={30} />
            <p className='logo_text'>Share & Prompt</p>
        </Link> 

        {/* Desktop Nav  */}
         <div className='sm:flex hidden'>{session?.user ?
            (<div className='flex gap-3 md:gap-5'>
                <Link href='/create-prompt' className='black_btn'>Create poste</Link>
                <button type="button" onClick={signOut} className='outline_btn'>Sign Out</button>
                <Link href='/profile'>
                    <Image src={session?.user.image}  width={37} height={37} className='rounded-full' alt='profilePicture'/>
                </Link>
                </div> )
            :(<>
                {providers && Object.values(providers).map((provider)=>(
                    <button type='button' className='black_btn' key={provider.id} onClick={()=>{signIn(provider.id)}}>Sign In</button>))}
            </>) }
        </div>

        {/* Mobile Nav */}
         <div className="sm:hidden flex relative">  
            {session?.user ?(
                <div className='flex'>
                    <Image src={session?.user.image} onClick={()=>{setToggleDropDown((prev)=>!prev)}} className='rounded-full'width={37} height={37} alt='profilePicture'/>
                    {toggleDropDown && ( 
                        <div className='dropdown'>
                            <Link href='/profile' className='dropdown_link' onClick={()=>{setToggleDropDown(false)}}>My profile</Link>
                            <Link href='/prompt' className='dropdown_link' onClick={()=>{setToggleDropDown(false)}}>Prompt</Link>
                            <button type="button" onClick={()=>{setToggleDropDown(false); signOut()} } className='mt-5 w-full black_btn'>Sign out</button>
                        </div> 
                    )}

                </div>
            ):(
                <>
                {providers && Object.values(providers).map((provider)=>(
                    <button type='button' className='black_btn' key={provider.id} onClick={()=>{signIn(provider.id)}}>Sign In</button>))}
            
                </>
            )

            }           
        </div>
    </nav>
  )
}

export default Nav