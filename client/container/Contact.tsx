import { Button } from '@components/Button'
import { Wrapper } from '@components/Wrapper'
import Link from 'next/link'
import React, { useState } from 'react'

export const Contact = () => {
  const [loading, setLoading] = useState(false)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  interface IFormData {
    name: string
    contact: string
    email: string
    message: string
  }

  const postFormData = async (formData: IFormData) => {
    try {
      const response = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      })
      if (response.ok) {
        const data = await response.json()
        console.log('response data', data)

        setLoading(false)
        window.alert(
          'Thanks! We have received your feedback you will hear from us shortly'
        )
      }
    } catch (err) {
      console.log(formData)
      setLoading(false)
      window.alert(
        'Sorry, your feedback could not be sent at this time. Try again later.'
      )
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    console.log('send request here')
    e.preventDefault()
    // Type Assertion: Sometimes we will have information about the type of a value that TypeScript can’t know about. it's a way to let the TypeScript compiler know the type of a variable.
    const target = e.target as typeof e.target & {
      name: { value: string }
      contact: { value: string }
      email: { value: string }
      message: { value: string }
    }
    const name = target.name.value
    const contact = target.contact.value
    const email = target.email.value
    const message = target.message.value
    const formData = {
      name,
      contact,
      email,
      message,
    }

    if (
      contact.trim().length !== 0 &&
      email.trim().length !== 0 &&
      name.trim().length !== 0 &&
      message.trim().length !== 0
    ) {
      return postFormData(formData)
    } else {
      window.alert('You cannot send empty feedback')
    }
  }
  return (
    <section>
      <Wrapper>
        <div className='py-10'>
          <h3>Contact Us</h3>
          <div className='flex justify-between flex-col lg:flex-row gap-4'>
            <div className='flex flex-col gap-8'>
              <p className='font-medium text-[40px]'>
                Let’s connect and <br /> get started!
              </p>
              <div className='flex items-center gap-4'>
                <span className='bg-[#f8f8f8] grid place-content-center w-16 h-16 p-6 rounded-2xl'>
                  <svg
                    width='22'
                    height='28'
                    viewBox='0 0 22 28'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.9997 13.9998C11.733 13.9998 12.361 13.7385 12.8837 13.2158C13.4055 12.6941 13.6663 12.0665 13.6663 11.3332C13.6663 10.5998 13.4055 9.97184 12.8837 9.44917C12.361 8.92739 11.733 8.6665 10.9997 8.6665C10.2663 8.6665 9.63879 8.92739 9.11701 9.44917C8.59434 9.97184 8.33301 10.5998 8.33301 11.3332C8.33301 12.0665 8.59434 12.6941 9.11701 13.2158C9.63879 13.7385 10.2663 13.9998 10.9997 13.9998ZM10.9997 23.7998C13.7108 21.3109 15.7219 19.0496 17.033 17.0158C18.3441 14.9829 18.9997 13.1776 18.9997 11.5998C18.9997 9.17761 18.2272 7.19406 16.6823 5.64917C15.1383 4.10517 13.2441 3.33317 10.9997 3.33317C8.75523 3.33317 6.86056 4.10517 5.31567 5.64917C3.77167 7.19406 2.99967 9.17761 2.99967 11.5998C2.99967 13.1776 3.65523 14.9829 4.96634 17.0158C6.27745 19.0496 8.28856 21.3109 10.9997 23.7998ZM10.9997 27.3332C7.4219 24.2887 4.7499 21.4607 2.98367 18.8492C1.21656 16.2385 0.333008 13.8221 0.333008 11.5998C0.333008 8.2665 1.40545 5.61095 3.55034 3.63317C5.69434 1.65539 8.17745 0.666504 10.9997 0.666504C13.8219 0.666504 16.305 1.65539 18.449 3.63317C20.5939 5.61095 21.6663 8.2665 21.6663 11.5998C21.6663 13.8221 20.7832 16.2385 19.017 18.8492C17.2499 21.4607 14.5775 24.2887 10.9997 27.3332Z'
                      fill='#313131'
                    />
                  </svg>
                </span>
                <span>Malakand Chowk, Mardan KP</span>
              </div>
              <Link
                href='callto:+92 323 3232321'
                className='flex items-center gap-4'
              >
                <span className='bg-[#f8f8f8] grid place-content-center w-16 h-16 p-6 rounded-2xl'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.4 24C1 24 0.666667 23.8667 0.4 23.6C0.133333 23.3333 0 23 0 22.6V17.2C0 16.8889 0.0999999 16.6164 0.3 16.3827C0.5 16.1498 0.755556 16 1.06667 15.9333L5.66667 15C5.97778 14.9556 6.29467 14.9831 6.61733 15.0827C6.93911 15.1831 7.2 15.3333 7.4 15.5333L10.5333 18.6667C12.2222 17.6444 13.7724 16.4333 15.184 15.0333C16.5947 13.6333 17.7667 12.1333 18.7 10.5333L15.4667 7.26667C15.2667 7.06667 15.1387 6.83867 15.0827 6.58267C15.0276 6.32756 15.0222 6.04445 15.0667 5.73333L15.9333 1.06667C15.9778 0.755556 16.1222 0.5 16.3667 0.3C16.6111 0.0999999 16.8889 0 17.2 0H22.6C23 0 23.3333 0.133333 23.6 0.4C23.8667 0.666667 24 1 24 1.4C24 4.26667 23.3609 7.06089 22.0827 9.78267C20.8053 12.5053 19.1164 14.9164 17.016 17.016C14.9164 19.1164 12.5058 20.8053 9.784 22.0827C7.06133 23.3609 4.26667 24 1.4 24ZM19.9667 8C20.3444 7.13333 20.6333 6.25556 20.8333 5.36667C21.0333 4.47778 21.1889 3.57778 21.3 2.66667H18.3333L17.7667 5.8L19.9667 8ZM8.03333 19.9333L5.8 17.7L2.66667 18.3333V21.2667C3.57778 21.2 4.48356 21.0556 5.384 20.8333C6.28356 20.6111 7.16667 20.3111 8.03333 19.9333Z'
                      fill='#313131'
                    />
                  </svg>
                </span>
                <span>+92 323 3232321</span>
              </Link>
              <Link
                href='mailto:info@lalachappal.com'
                className='flex items-center gap-4'
              >
                <span className='bg-[#f8f8f8] grid place-content-center w-16 h-16 p-6 rounded-2xl'>
                  <svg
                    width='28'
                    height='20'
                    viewBox='0 0 28 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M26 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H26C26.5304 20 27.0391 19.7893 27.4142 19.4142C27.7893 19.0391 28 18.5304 28 18V2C28 1.46957 27.7893 0.960859 27.4142 0.585786C27.0391 0.210714 26.5304 0 26 0ZM23.8 2L14 8.78L4.2 2H23.8ZM2 18V2.91L13.43 10.82C13.5974 10.9361 13.7963 10.9984 14 10.9984C14.2037 10.9984 14.4026 10.9361 14.57 10.82L26 2.91V18H2Z'
                      fill='#313131'
                    />
                  </svg>
                </span>
                <span>info@lalachappal.com</span>
              </Link>
            </div>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-8 border border-primary border-r-4 border-b-4 p-8 rounded-3xl'
            >
              <div className='flex gap-8 flex-col lg:flex-row'>
                <div className='flex gap-1 flex-col'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    className='border border-[#94a3b8] p-3 rounded w-full'
                  />
                </div>
                <div className='flex gap-1 flex-col'>
                  <label htmlFor='contact'>Contact</label>
                  <input
                    type='tel'
                    id='contact'
                    name='contact'
                    className='border border-[#94a3b8] p-3 rounded w-full'
                  />
                </div>
              </div>
              <div className='flex gap-1 flex-col'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='border border-[#94a3b8] p-3 rounded'
                />
              </div>
              <div className='flex gap-1 flex-col'>
                <label htmlFor='message'>Message</label>
                <textarea
                  name='message'
                  id='message'
                  cols={30}
                  rows={5}
                  className='border border-[#94a3b8] p-3 rounded'
                ></textarea>
              </div>
              <Button type='submit' disabled={loading}>
                Send
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
