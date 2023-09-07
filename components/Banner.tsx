import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/outline'
import React from 'react'

function Banner() {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl'>Memperkenalkan</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Remote Worker Indonesia</h1>
            <p className='text-2xl'>Mentoring bagimu agar 100% WFH! 💪</p>
            <button className='buttonBanner bg-[#87CC17] py-3 px-6 my-4'>Get Started</button>
        </div>
        <div>
            <img className='object-contain' src="https://res.cloudinary.com/hafidkrntn/image/upload/v1664948285/rwid/image_3_1_gswdh9.png" width={500} alt="/" />
        </div>
        
    </div>
</div>
)
}

export default Banner