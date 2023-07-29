import { Wrapper } from '@components/Wrapper'
import { Contact } from '@container/Contact'
import { Footer } from '@container/Footer'
import { Header } from '@container/Header'
import Head from 'next/head'

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
          <h1 className='text-center mb-10 text-6xl text-primary font-semibold'>
            Get In Touch
          </h1>
          <Contact />
        </Wrapper>
      </section>
      <Footer />
    </>
  )
}
