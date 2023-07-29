import { Wrapper } from '@components/Wrapper'
import { Footer } from '@container/Footer'
import { Header } from '@container/Header'
import { imagesGallery } from 'constants/data'
import Head from 'next/head'
import Image from 'next/image'

export default function Premade() {
  return (
    <>
      <Head>
        <title>Premade Section</title>
        <meta name='description' content='Premade lala chappals' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <section className='pt-[96px] pb-[171px]'>
        <Wrapper>
          <h2 className='text-center text-6xl text-primary font-semibold'>
            Exquisite Handmade Chappals
          </h2>
          <div className='grid md:grid-cols-2 my-20 lg:grid-cols-3 gap-5'>
            {imagesGallery.map((img, index) => (
              <Image
                src={img.src}
                key={img.id}
                width={500}
                height={591}
                alt='img'
                className={`w-auto h-auto shadow-lg border-t-2 border-primary rounded-lg overflow-hidden ${
                  index % 2 === 1 ? 'md:mt-10' : ''
                }`}
              />
            ))}
          </div>
        </Wrapper>
      </section>
      <Footer />
    </>
  )
}
