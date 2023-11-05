import React from 'react'
import CurrentContent from './currentContent'

export default function Sidebar({name}) {
  return (
    <div className='bg-[#272727] sidebar h-full overflow-scroll'>
      <p className='text-2xl font-bold text-center text-white py-4'>{name}</p>
      <CurrentContent />
      <CurrentContent />
      <CurrentContent />
      <CurrentContent />
      <CurrentContent />
      <CurrentContent />
    </div>
  )
}
