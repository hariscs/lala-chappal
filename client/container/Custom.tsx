import React, { RefObject, useState } from 'react'
import Image from 'next/image'

import { Button } from '@components/Button'
import { Wrapper } from '@components/Wrapper'
import { imagesData, shoeSizes } from 'constants/data'
import { Sidebar } from '@components/Sidebar'
import { AnimatePresence } from 'framer-motion'

export const Custom = ({
  targetRef,
}: {
  targetRef: RefObject<HTMLElement>
}) => {
  const [selectedDesign, setSelectedDesign] = useState('signature')
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedNumber, setSelectedNumber] = useState('')
  const [imgURL, setImgURL] = useState('/chappals/1black.png')

  const handleDesignSelect = (src: string) => {
    setSelectedDesign(src)
    if (src === 'signature') {
      setImgURL('/chappals/1black.png')
      setSelectedColor('black')
    } else if (src === 'lala') {
      setImgURL('/chappals/2brown.png')
      setSelectedColor('brown')
    } else {
      setImgURL('/chappals/3white.png')
      setSelectedColor('white')
    }
  }

  const handleColorSelect = (color: string) => {
    if (selectedDesign === 'signature' && color === 'black') {
      setImgURL('/chappals/1black.png')
      setSelectedColor(color)
    } else if (selectedDesign === 'signature' && color === 'brown') {
      setImgURL('/chappals/1brown.png')
      setSelectedColor(color)
    } else if (selectedDesign === 'lala' && color === 'brown') {
      setImgURL('/chappals/2brown.png')
      setSelectedColor(color)
    } else if (selectedDesign === 'lala' && color === 'black') {
      setSelectedColor(color)
      setImgURL('/chappals/2black.png')
    } else if (selectedDesign === 'norozi' && color === 'brown') {
      setSelectedColor(color)
      setImgURL('/chappals/3brown.png')
    } else if (selectedDesign === 'norozi' && color === 'white') {
      setSelectedColor(color)
      setImgURL('/chappals/3white.png')
    }
  }

  const handleNumberSelect = (number: string) => {
    setSelectedNumber(number)
  }

  const formData = {
    color: selectedColor,
    design: selectedDesign,
    size: selectedNumber,
    soleThickness: '2',
  }

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    if (!selectedColor || !selectedDesign || !selectedNumber) {
      return alert('Select all fields')
    }
    setSidebarOpen(!sidebarOpen)
  }

  const selectedImageUrl =
    selectedDesign && selectedDesign.trim().length !== 0
      ? imagesData.find(
          (v) =>
            v.name.trim().toLowerCase() === selectedDesign.trim().toLowerCase()
        )?.src
      : '/chappals/1black.png'

  return (
    <section className='py-8 lg:py-16' ref={targetRef}>
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
          <div className='flex gap-4 items-center flex-col md:flex-row'>
            <div className='flex flex-col gap-4'>
              {imagesData.map((img, i) => (
                <div
                  key={i}
                  className={`bg-[#f9f9f9] cursor-pointer grid place-content-center border border-primary rounded-3xl w-[166px] h-[163px] ${
                    selectedDesign === img.name
                      ? 'border-r-4 border-b-4'
                      : 'border-r border-b'
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
                <Image
                  src={imgURL as string}
                  alt='chappal'
                  width={537}
                  height={309}
                  className='rounded-2xl h-auto w-auto'
                />

                <div className='flex gap-4'>
                  {selectedDesign === 'norozi' ? (
                    <>
                      <div
                        className={`rounded-full cursor-pointer border-4 w-14 h-14 bg-[#652a02] ${
                          selectedColor === 'brown'
                            ? 'border-primary'
                            : 'border-white'
                        }`}
                        onClick={() => handleColorSelect('brown')}
                      ></div>
                      <div
                        className={`rounded-full cursor-pointer border-4 w-14 h-14 bg-[#fff] ${
                          selectedColor === 'white'
                            ? 'border-primary'
                            : 'border-black'
                        }`}
                        onClick={() => handleColorSelect('white')}
                      ></div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`rounded-full cursor-pointer border-4 w-14 h-14 bg-[#652a02] ${
                          selectedColor === 'brown'
                            ? 'border-primary'
                            : 'border-white'
                        }`}
                        onClick={() => handleColorSelect('brown')}
                      ></div>
                      <div
                        className={`rounded-full cursor-pointer border-4 w-14 h-14 bg-[#000] ${
                          selectedColor === 'black'
                            ? 'border-primary'
                            : 'border-white'
                        }`}
                        onClick={() => handleColorSelect('black')}
                      ></div>
                    </>
                  )}
                </div>
              </div>
              <div className='flex text-3xl my-3 font-bold items-center justify-center gap-8'>
                {shoeSizes.map((sh) => (
                  <div
                    key={sh}
                    className={`bg-[#f9f9f9] cursor-pointer text-base rounded-full p-2 ${
                      selectedNumber === sh
                        ? 'text-primary font-bold'
                        : 'text-[#afafaf] bg'
                    }
                    `}
                    onClick={() => handleNumberSelect(sh)}
                  >
                    {sh}
                  </div>
                ))}
              </div>
              <div className='text-end'>
                <Button type='button' hanldeClick={toggleSidebar}>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </form>
        <AnimatePresence>
          {sidebarOpen && (
            <Sidebar
              isOpen={sidebarOpen}
              toggleSidebar={toggleSidebar}
              formData={formData}
            />
          )}
        </AnimatePresence>
      </Wrapper>
    </section>
  )
}
