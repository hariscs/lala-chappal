import { OfferCard } from '@components/OfferCard'
import { TestimonialCard } from '@components/TestimonialCard'
import { Wrapper } from '@components/Wrapper'
import { offers, testimonials } from 'constants/data'

export const Offers = () => {
  return (
    <section className='bg-[#fafafa]'>
      <Wrapper>
        <div className='pb-8'>
          <div className='flex justify-center items-center mb-11'>
            <h2 className='text-primary font-semibold text-5xl'>
              What we offer
            </h2>
          </div>
          <div className='flex justify-between gap-2'>
            {offers.map((offer) => (
              <OfferCard key={offer.id} data={offer} />
            ))}
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center flex-wrap mb-11'>
            <h2 className='text-primary font-semibold text-5xl'>
              Testimonials
            </h2>
          </div>
          <div className='flex gap-8'>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} data={testimonial} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
