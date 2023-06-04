import React from 'react'

interface IButton {
  children: React.ReactNode
}

export const Button = ({ children }: IButton) => {
  return (
    <button className='bg-primary capitalize rounded-2xl text-white text-xl lg:text-2xl py-2 px-6 lg:py-4 lg:px-12'>
      {children}
    </button>
  )
}
