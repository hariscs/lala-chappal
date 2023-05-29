import React from 'react'

interface IButton {
  children: React.ReactNode
}

export const Button = ({ children }: IButton) => {
  return (
    <button className='bg-primary capitalize rounded-2xl text-white text-[26px] py-4 px-12'>
      {children}
    </button>
  )
}
