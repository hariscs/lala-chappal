import Image, { StaticImageData } from 'next/image'
import React from 'react'

export interface ITestimonialCard {
  name: string
  review: string
  img: string
}

export const TestimonialCard = ({ data }: { data: ITestimonialCard }) => {
  const { name, review, img } = data
  console.log(img)
  return (
    <div className='border h-[320px] p-8 max-w-sm rounded-[2rem] flex flex-col border-b-4 border-r-4 border-primary'>
      <div className='flex justify-betweem items-center gap-4'>
        <Image
          className='rounded-full border-4 border-primary w-auto h-auto'
          src={img}
          alt={name}
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
