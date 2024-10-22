import Link from 'next/link';
import React, { FC } from 'react'



const Navbar: FC = ({ }) => {
  return (
    <div className='h-[72px] border-b border-black'>
      <nav className={`flex items-center justify-between max-w-[1312px] mx-auto h-full`}>
        <Link href="/" className='font-bold text-[32px]'>Ponari</Link>

        <div className='flex gap-[16px]'>
          <Link href="/login" className='h-[40px] w-[99px] border border-black flex items-center justify-center hover:bg-slate-50 transition-all'>Login</Link>
          <Link href="/sign-up" className='h-[40px] w-[99px] border border-black bg-black text-white flex items-center justify-center hover:bg-opacity-80 transition-all'>Sign Up</Link>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;