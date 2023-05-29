import { Button } from '@components/Button'
import { Wrapper } from '@components/Wrapper'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className='pt-[96px] pb-[171px]'>
      <Wrapper>
        <div className='flex items-center justify-between gap-1'>
          <div>
            <h1 className='text-primary text-[80px] font-bold'>
              <span className='uppercase'>lala</span> Chappal
            </h1>
            <p className='text-accent mb-[72px] max-w-[27ch]'>
              You will get the best quality chappals here. We don’t compromise
              on quality.
            </p>
            <Button>let's customize</Button>
          </div>
          {/* img */}
          <Image
            src='/hero-img-1.png'
            alt='a guy wearing lala chappal'
            width={635}
            height={657}
          />
        </div>
      </Wrapper>
    </section>
  )
}
