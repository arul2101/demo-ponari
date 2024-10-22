import React, { FC } from 'react'
import ImageHero from '@/public/img/hero_image.jpg';
import Image from 'next/image';

const Jumbotron: FC = ({ }) => {
  return (
    <section className={`max-w-[1312px] mx-auto h-[864px] flex items-center`}>
      <div className='flex flex-end items-center gap-[79.5px]'>
        <div className='h-[327px] w-[480px] space-y-[24px]'>
          <h2 className='font-bold text-[56px] leading-[67.2px]'>Virtual healthcare
            for you</h2>

          <p className='text-[18px] w-[430px]'>Ponari provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>

          <div className='flex gap-[8px]'>
            <button className='h-[48px] w-[128px] bg-black text-white'>Get Started</button>
            <button className='h-[48px] w-[128px] border border-black'>Learn More</button>
          </div>
        </div>

        <div className='w-[752px]'>
          <Image
            src={ImageHero}
            alt='Hero Image'
            className='w-[752px] h-[640px]'
            height={640}
          />
        </div>
      </div>
    </section>
  )
}

export default Jumbotron;