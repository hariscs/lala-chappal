import Image, { StaticImageData } from 'next/image'

interface IOfferCard {
  icon: StaticImageData
  heading: string
  text: string
}

export const OfferCard = ({ data }: { data: IOfferCard }) => {
  const { icon, heading, text } = data

  return (
    <div className=' max-w-[333px] md:max-w-[440px] px-7 py-14 md:px-[53px] md:py-[74px] rounded-[2rem]  flex flex-col items-center shadow-cards border-b-4 border-r-4 border-primary'>
      <Image
        src={icon}
        alt={heading}
        className='w-auto h-auto'
        width={80}
        height={95}
      />
      <h3 className=' block text-xl text-secondary font-semibold pt-4 pb-4'>
        {heading}
      </h3>

      <p className=' block text-accent text-center '>{text}</p>
    </div>
  )
}
