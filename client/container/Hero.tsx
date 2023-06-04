import { Button } from '@components/Button'
import { Wrapper } from '@components/Wrapper'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className='pt-[96px] pb-[171px]'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:justify-between'>
          <div>
            <h1 className='text-primary text-5xl lg:text-7xl font-bold'>
              <span className='uppercase'>lala</span> Chappal
            </h1>
            <p className='text-accent mb-9 lg:mb-[72px] md:max-w-[27ch]'>
              You will get the best quality chappals here. We don’t compromise
              on quality.
            </p>
            <Button>let's customize</Button>
          </div>
          {/* img */}
          <Image
            src='/hero-img-1.png'
            alt='a guy wearing lala chappal'
            width={535}
            height={557}
            className='h-auto w-auto'
          />
        </div>
      </Wrapper>
    </section>
  )
}
