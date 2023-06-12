import Image from 'next/image'
export const DesignCard = ({ src }: { src: string }) => {
  return (
    <div className='border border-primary w-[166px] h-[163px]'>
      <Image src={src} width={130} height={130} alt='chappal' />
    </div>
  )
}
