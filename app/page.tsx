import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import React, { FC } from 'react'

interface homeProps {
  children: React.ReactNode
}

const Home: FC<homeProps> = ({ }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Providers />
      <Footer />
    </>
  )
}

export default Home;