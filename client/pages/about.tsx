import { Wrapper } from '@components/Wrapper'
import { Footer } from '@container/Footer'
import { Header } from '@container/Header'
import Head from 'next/head'
import Image from 'next/image'

export default function Premade() {
  return (
    <>
      <Head>
        <title>About Section</title>
        <meta name='description' content='Premade lala chappals' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <section className='pt-[96px] pb-[171px] px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8'>
        <Wrapper>
          <h1 className='mt-2 text-primary mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl'>
            About Us
          </h1>
          <Image
            src='/handmade.jpeg'
            alt='handmade'
            className='w-auto h-auto rounded-lg my-10'
            width={1100}
            height={600}
          />
          <h2 className='text-3xl text-center mb-5'>Who We Are</h2>
          <div className='text-center flex flex-col gap-5 mb-10'>
            <p className='text-gray-800'>
              An artisanal chappal workshop, crafting custom handmade chappals
              that complement your style. Skilled artisans create diverse
              designs, catering to every occasion.
            </p>
            <p className='text-gray-800'>
              At our chappal boutique, we redefine personalized footwear with
              exceptional craftsmanship. Choose from traditional designs,
              reflecting your unique taste. Prioritizing comfort, we offer
              various sizes for a perfect fit.
            </p>
          </div>
        </Wrapper>
      </section>
      <Footer />
    </>
  )
}
