import React, { useState } from 'react'
import Image from 'next/image'

import { Button } from '@components/Button'
import { Wrapper } from '@components/Wrapper'
import { imagesData } from 'constants/data'

export const Custom = () => {
  const [selectedDesign, setSelectedDesign] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedNumber, setSelectedNumber] = useState('')

  const handleDesignSelect = (src: string) => {
    setSelectedDesign(src)
  }

  const handleColorSelect = (color: string) => {
    setSelectedColor(color)
  }

  const handleNumberSelect = (number: string) => {
    setSelectedNumber(number)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    // Prepare the data to be sent to the API
    const formData = {
      design: selectedDesign,
      color: selectedColor,
      number: selectedNumber,
    }

    // Send form data to the API using fetch or any other HTTP client library
    fetch('https://example.com/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response if needed
        console.log(data)
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error(error)
      })
    console.log(formData)
  }

  return (
    <section className='py-8 lg:py-16'>
      <Wrapper>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-between lg:flex-row gap-4'
        >
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
              {imagesData.map((img, i) => (
                <div
                  key={i}
                  className={`bg-[#f9f9f9] cursor-pointer border border-primary rounded-3xl w-[166px] h-[163px] ${
                    selectedDesign === img.name ? 'border-r-4 border-b-4' : 'border-r border-b'
                  }`}
                  onClick={() => handleDesignSelect(img.name)}
                >
                  <Image
                    src={img.src}
                    width={130}
                    height={130}
                    alt={img.name}
                  />
                </div>
              ))}
            </div>
            <div>
              <h4 className='text-[#333] text-2xl mb-5'>select your design</h4>
              <div className='border flex flex-col justify-between p-2 items-center bg-[#f9f9f9] max-w-[668px] max-h-[548px] rounded-2xl'>
                <div>
                  <Image
                    src='/blackchappal.png'
                    alt='chappal'
                    width={537}
                    height={309}
                  />
                </div>
                <div className='flex gap-4'>
                  <div
                    className={`rounded-full cursor-pointer border-4 w-14 h-14 bg-[#923603] ${
                      selectedColor === 'yellow'
                        ? 'border-primary'
                        : 'border-white'
                    }`}
                    onClick={() => handleColorSelect('yellow')}
                  ></div>
                  <div
                    className={`rounded-full cursor-pointer border-4 w-14 h-14 bg-[#2E343E] ${
                      selectedColor === 'dark-blue'
                        ? 'border-primary'
                        : 'border-white'
                    }`}
                    onClick={() => handleColorSelect('dark-blue')}
                  ></div>
                </div>
              </div>
              <div className='flex text-3xl my-3 font-bold items-center justify-center gap-8'>
                <div
                  className={`bg-[#f9f9f9] cursor-pointer rounded-full p-2 ${
                    selectedNumber === '10' ? 'text-primary' : 'text-[#afafaf]'
                  }`}
                  onClick={() => handleNumberSelect('10')}
                >
                  10
                </div>
                <div
                  className={`bg-[#f9f9f9] cursor-pointer rounded-full p-2 ${
                    selectedNumber === '12' ? 'text-primary' : 'text-[#afafaf]'
                  }`}
                  onClick={() => handleNumberSelect('12')}
                >
                  12
                </div>
              </div>
              <div className='text-end'>
                <Button type='submit'>Add to cart</Button>
              </div>
            </div>
          </div>
        </form>
      </Wrapper>
    </section>
  )
}
