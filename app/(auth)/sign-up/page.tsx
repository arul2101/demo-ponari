import SignUpForm from '@/components/SignUpForm';
import Link from 'next/link';
import React, { FC } from 'react'

// interface pageProps {

// }

const page: FC = ({ }) => {
  return (
    <>
      <div className='h-[72px] border-b border-black'>
        <nav className={`flex items-center justify-between max-w-[1312px] mx-auto h-full`}>
          <Link href="/" className='font-bold text-[32px]'>Ponari</Link>

          <p className='text-[16px]'>Already have an account? <Link href="/login" className='underline'>Log In</Link></p>
        </nav>
      </div>
      <SignUpForm />
      <p className='text-center text-[16px] mb-4'>© 2024 Ponari</p>
    </>
  )
}

export default page;