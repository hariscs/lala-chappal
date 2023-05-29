import Image from 'next/image'
import Link from 'next/link'

const navLinks = ['home', 'about', 'gallery', 'contact']

export const Header = () => {
  return (
    <header className='flex px-6 md:px-20 py-5 border-b items-center justify-between '>
      {/* logo */}
      <Link href='/'>
        <Image
          src='/lala.png'
          alt='Lala Chappal'
          width={100}
          height={100}
          priority
          className='w-auto h-16'
        />
      </Link>
      {/* nav links */}
      <nav className='hidden md:block'>
        <ul className='flex gap-16'>
          {navLinks.map((link, i) => (
            <li key={link}>
              <Link
                href={`/${link}`}
                className={`${
                  i === 0 && 'text-primary'
                } py-3.5 hover:text-primary text-[#333] capitalize inline-block text-xl`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* cart only visible on larger screens*/}
      <Link href='/cart' className='hidden md:block py-3.5'>
        <Image src='/cart.svg' priority alt='cart' width={27} height={27} />
      </Link>
      {/* mobile menu */}
      <div className='md:hidden py-3.5 cursor-pointer'>
        <Image src='/menu.svg' width={32} height={21} alt='mobile menu' />
      </div>
    </header>
  )
}
