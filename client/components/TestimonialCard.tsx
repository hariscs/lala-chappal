import Image from 'next/image'
import React from 'react'

export interface ITestimonialCard {
  name: string
  review: string
}

export const TestimonialCard = ({ data }: { data: ITestimonialCard }) => {
  const { name, review } = data

  return (
    <div className='border p-8 max-w-sm rounded-[2rem]  flex flex-col shadow-cards border-b-4 border-r-4 border-primary'>
      <div className='flex justify-around'>
        <Image
          className='rounded-full border-4 border-primary max-w-[110px] max-h-[110px]'
          src='https://i.pravatar.cc/300'
          alt='Client Image'
          width={110}
          height={110}
        />
        <h3 className='text-3xl'>{name}</h3>
        <Image
          className='max-w-[62px] max-h-[50px]'
          src='/quotes.svg'
          alt='Qoutation'
          height={50}
          width={62}
        />
      </div>
      <p className='text-accent pl-4 pt-4'>{review}</p>
    </div>
  )
}
