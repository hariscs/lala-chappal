import { OfferCard } from '@components/OfferCard'
import { TestimonialCard } from '@components/TestimonialCard'
import { Wrapper } from '@components/Wrapper'
import { offers, testimonials } from 'constants/data'

export const Offers = () => {
  return (
    <section className='bg-[#fafafa] py-6 lg:py-11'>
      <Wrapper>
        <div className='pb-8'>
          <div className='flex justify-center items-center mb-11'>
            <h2 className='text-primary font-semibold text-5xl'>
              What we offer
            </h2>
          </div>
          <div className='flex justify-center gap-4 lg:gap-8 flex-wrap'>
            {offers.map((offer) => (
              <OfferCard key={offer.id} data={offer} />
            ))}
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center lg:mt-24 mt-12 mb-11'>
            <h2 className='text-primary font-semibold text-5xl'>
              Testimonials
            </h2>
          </div>
          <div className='flex gap-4 flex-wrap justify-center lg:gap-8 items-center'>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} data={testimonial} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
