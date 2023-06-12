import { Button } from '@components/Button'
import { Wrapper } from '@components/Wrapper'
import Image from 'next/image'
import React from 'react'
const data = [
  {
    id: '1',
    src: '/bluechappal.png',
  },
  {
    id: '2',
    src: '/yellowchappal.png',
  },
]
export const Cutsom = () => {
  return (
    <section className='py-8 lg:py-16'>
      <Wrapper>
        <form className='flex flex-col justify-between lg:flex-row gap-4'>
          <div>
            <h2 className='text-4xl text-[#333]'>
              Customise your <br />{' '}
              <span className='uppercase font-bold'>chappals</span>
            </h2>
            <p className='text-xl lg:text-2xl mt-2'>
              Make your own or choose from our gallery of popular designs
            </p>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='flex flex-col gap-4'>
              {data.map((img, i) => (
                <div
                  key={i}
                  className=' bg-[#f9f9f9] cursor-pointer border border-primary border-r-4 rounded-3xl w-[166px] h-[163px]'
                >
                  <Image src={img.src} width={130} height={130} alt='chappal' />
                </div>
              ))}
            </div>
            <div>
              <h4 className='text-[#333] text-2xl mb-5'>select your design</h4>
              <div className='border flex flex-col justify-between p-2 items-center bg-[#f9f9f9] w-[668px] h-[548px] rounded-2xl'>
                <div>
                  <Image
                    src='/blackchappal.png'
                    alt='chappal'
                    width={537}
                    height={309}
                  />
                </div>
                <div className='flex gap-4'>
                  <div className='rounded-full cursor-pointer border-4 w-14 h-14 bg-[#923603] border-white'></div>
                  <div className='rounded-full cursor-pointer border-4 w-14 h-14 border-white bg-[#2E343E]'></div>
                </div>
              </div>
              <div className='flex text-3xl my-3 font-bold items-center justify-center gap-8'>
                <div className=' bg-[#f9f9f9] text-[#afafaf] cursor-pointer rounded-full p-2'>
                  10
                </div>
                <div className=' text-primary bg-[#f9f9f9] cursor-pointer rounded-full p-2'>
                  12
                </div>
              </div>
              <div className='text-end'>
                <Button>Add to cart</Button>
              </div>
            </div>
          </div>
        </form>
      </Wrapper>
    </section>
  )
}
