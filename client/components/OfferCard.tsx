import Image, { StaticImageData } from 'next/image'

interface IOfferCard {
  id: string
  icon: string
  heading: string
  text: string
}

export const OfferCard = ({ data }: { data: IOfferCard }) => {
  const { icon, heading, text } = data

  return (
    <div className='border max-w-sm px-7 py-12 lg:px-12 lg:py-16 rounded-[2rem] flex flex-col items-center shadow-cards border-b-4 border-r-4 border-primary'>
      <Image
        src={icon}
        alt={heading}
        className='w-auto h-auto rounded-full'
        width={105}
        height={150}
      />
      <h3 className='capitalize text-xl text-secondary font-semibold pt-4 pb-4'>
        {heading}
      </h3>

      <p className='text-accent'>{text}</p>
    </div>
  )
}
