import { Wrapper } from '@components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-[#151617] py-12 lg:pt-24 lg:pb-20 '>
      <Wrapper>
        <div className='flex justify-between flex-col lg:flex-row items-center'>
          <div className='flex flex-col gap-16 lg:gap-20'>
            <div>
              <Image
                src='/lala.png'
                alt='lala chappal'
                width={100}
                height={100}
              />
              <p className='text-[#d9dbe1] max-w-[32ch]'>
                <span className='text-primary'>Lala Chappal</span> empowers you
                to create unique footwear that matches your style and
                personality. Choose from a wide range of sizes, colors, and
                designs, and watch your vision come to life. Experience the joy
                of walking in shoes that are tailor-made for you.
              </p>
            </div>
            <div className='flex items-center gap-6 lg:gap-7'>
              <Link href='/' className='bg-gray/25 w-10 h-10 p-3 rounded-full'>
                <Image
                  src='/insta.svg'
                  alt='instagram'
                  width={38}
                  height={38}
                />
              </Link>
              <Link href='/' className='bg-gray/25 w-10 h-10  p-3 rounded-full'>
                <Image
                  src='/twitter.svg'
                  alt='twitter'
                  width={38}
                  height={38}
                />
              </Link>
              <Link href='/' className='bg-gray/25 w-10 h-10  p-3 rounded-full'>
                <Image
                  src='/youtube.svg'
                  alt='youtube'
                  width={38}
                  height={38}
                />
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='text-white text-xl font-bold'>Quick links</h3>
            <div className='flex flex-col gap-3'>
              <Link href='/' className='text-gray text-xl'>
                Home
              </Link>
              <Link href='/' className='text-gray text-xl'>
                About
              </Link>
              <Link href='/' className='text-gray text-xl'>
                Gallery
              </Link>
              <Link href='/' className='text-gray text-xl'>
                Contact
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='text-white text-xl font-bold'>Reach us</h3>
            <div className='flex flex-col gap-3'>
              <Link
                href='mailto:info@lalachappal.com'
                className='text-gray text-xl flex items-center gap-2.5'
              >
                <svg
                  width='20'
                  height='18'
                  viewBox='0 0 20 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.939 0C16.28 0 17.57 0.53 18.519 1.481C19.469 2.43 20 3.71 20 5.05V12.95C20 15.74 17.73 18 14.939 18H5.06C2.269 18 0 15.74 0 12.95V5.05C0 2.26 2.259 0 5.06 0H14.939ZM16.53 6.54L16.61 6.46C16.849 6.17 16.849 5.75 16.599 5.46C16.46 5.311 16.269 5.22 16.07 5.2C15.86 5.189 15.66 5.26 15.509 5.4L11 9C10.42 9.481 9.589 9.481 9 9L4.5 5.4C4.189 5.17 3.759 5.2 3.5 5.47C3.23 5.74 3.2 6.17 3.429 6.47L3.56 6.6L8.11 10.15C8.67 10.59 9.349 10.83 10.06 10.83C10.769 10.83 11.46 10.59 12.019 10.15L16.53 6.54Z'
                    fill='#EC5E3F'
                  />
                </svg>
                <span>info@lalachappal.com</span>
              </Link>
              <Link
                href='callto:+91 98765 5553'
                className='text-gray text-xl flex items-center gap-2.5'
              >
                <svg
                  width='14'
                  height='20'
                  viewBox='0 0 14 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.00845931 8.69455C0.00845931 8.07591 0.015909 7.45726 0.0233933 6.83575L0.0233934 6.83574C0.0271878 6.52065 0.030991 6.20482 0.0338368 5.88788C0.0338368 2.48258 2.16556 -0.000244141 5.10936 -0.000244141H8.89063C11.8344 -0.000244141 13.9662 2.48258 13.9662 5.88788C13.9915 7.25196 14 8.61605 14 9.98994C14 11.3638 13.9915 12.7475 13.9662 14.1116C13.9662 17.5169 11.8344 19.9998 8.89063 19.9998H5.10936C2.16556 19.9998 0.0338368 17.5169 0.0338368 14.1018C0.0169184 12.8162 0 11.5012 0 10.1666L0.00845931 8.69455ZM8.27973 17.6398V17.7998C8.27973 18.4734 7.71653 18.9998 6.99973 18.9998C6.29999 18.9998 5.71973 18.4734 5.71973 17.7998V17.6398C5.71973 16.9838 6.29999 16.4398 6.99973 16.4398C7.71653 16.4398 8.27973 16.9838 8.27973 17.6398ZM2.01671 6.44316C2.01136 6.84714 2.00604 7.24926 2.00604 7.65137L2 8.6082C2 9.47571 2.01208 10.3305 2.02417 11.1661C2.02417 13.3859 3.54683 14.9998 5.64955 14.9998H8.35045C10.4532 14.9998 11.9758 13.3859 11.9758 11.1725C11.994 10.2858 12 9.38641 12 8.49338C12 7.60034 11.994 6.71369 11.9758 5.82704C11.9758 3.61359 10.4532 1.99976 8.35045 1.99976H5.64955C3.54683 1.99976 2.02417 3.61359 2.02417 5.82704C2.02214 6.03305 2.01942 6.23834 2.01671 6.44316Z'
                    fill='#EC5E3F'
                  />
                </svg>
                <span>+91 98765 5553</span>
              </Link>
              <div className='text-gray text-xl flex items-center gap-2.5'>
                <svg
                  width='18'
                  height='20'
                  viewBox='0 0 18 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.03 1.99535e-05C11.29 0.01002 13.45 0.91002 15.03 2.49002C16.62 4.08002 17.51 6.23002 17.5 8.46002V8.51002C17.44 11.54 15.74 14.33 13.62 16.51C12.42 17.74 11.09 18.83 9.64 19.75C9.25 20.08 8.68 20.08 8.29 19.75C6.14 18.35 4.24 16.59 2.7 14.54C1.35 12.76 0.58 10.62 0.5 8.39002C0.52 3.74002 4.34 -0.00998005 9.03 1.99535e-05ZM9.03 11.26C9.74 11.26 10.42 10.99 10.92 10.5C11.44 9.99002 11.731 9.31102 11.731 8.60002C11.731 7.12002 10.52 5.93002 9.03 5.93002C7.54 5.93002 6.34 7.12002 6.34 8.60002C6.34 10.061 7.52 11.24 9 11.26H9.03Z'
                    fill='#EC5E3F'
                  />
                </svg>
                <span>Malakand Chowk, Mardan KP</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-5'>
          <span className='text-gray'>
            © 2023 Lala chappal. All rights reserved
          </span>
          <div className='flex gap-4 text-gray'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Disclaimer</span>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
