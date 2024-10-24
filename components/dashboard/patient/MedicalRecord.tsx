import Overlay from '@/utils/Overlay'
import React, { FC } from 'react'

type MedicalRecordProps = {
  onMedicalRecord: React.Dispatch<React.SetStateAction<number>>;
}

const MedicalRecord: FC<MedicalRecordProps> = ({ onMedicalRecord }) => {
  return (
    <>
      <Overlay />

      <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">

        <div className="relative h-[806px] w-[570px] bg-white rounded-[20px] p-10">
          <div
            className="absolute right-10 top-7 cursor-pointer"
            onClick={() => onMedicalRecord(0)}
          >
            <svg
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.12646 1.09961L10.4081 11.4231M19.6897 21.7466L10.4081 11.4231M10.4081 11.4231L19.6897 1.09961L1.12646 21.7466"
                stroke="black"
              />
            </svg>
          </div>

          <div className='flex flex-col justify-center items-center gap-2 mb-2'>
            <h2 className="text-[32px]">26 Nov 2023</h2>
            <p className='text-[12px]'>09.00 - 10.00</p>
          </div>

          <div className='flex justify-between items-center mb-6'>
            <h2 className='font-semibold text-[20px]'>Hidayah Hospital</h2>
            <p>Dr. Adam H.</p>
          </div>

          <div className='mb-4'>
            <p className='font-semibold'>Note</p>
          </div>

          <div className='h-[560px] w-[495px] border border-black border-dashed rounded-[12px] p-6'>
            <div>
              <h2>Symptoms</h2>
              <p className='text-[#878787] text-[13px]'>fever since 2 days ago, accompanied by cough and runny nose</p>
            </div>
            <div className='mt-4'>
              <h2>Check up result</h2>
              <p className='text-[#878787] text-[13px]'>body temperature 38.0 C</p>
            </div>
            <div className='mt-4'>
              <h2>Diagnosis</h2>
              <p className='text-[#878787] text-[13px]'>Influenza</p>
            </div>
            <div className='mt-4'>
              <h2>Care suggestions</h2>
              <ul className='text-[#878787] text-[13px] list-disc ml-6'>
                <li>Paracetamol</li>
                <li>Get enough rest</li>
              </ul>
            </div>

            <h2 className='mt-4 font-semibold'>Prescription</h2>

            <div className='w-[441px] h-[233px] border border-black border-dashed rounded-[12px] py-4 px-4'>
              <div className='mt-4'>
                <h2>Loratadine 200 mg</h2>
                <p className='text-[#878787] text-[13px]'>Before meals, 3x a day</p>
              </div>
              <div className='mt-4'>
                <h2>Dexteem 200 mg</h2>
                <p className='text-[#878787] text-[13px]'>After meals, 3x a day</p>
              </div>
              <div className='mt-4'>
                <h2>Sanmol 20 mg</h2>
                <p className='text-[#878787] text-[13px]'>After meals, 3x a day</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default MedicalRecord