import { OfferCard } from "@components/OfferCard";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "@components/TestimonialCard";
import { Wrapper } from "@components/Wrapper";
import { offers, testimonials } from "constants/data";

export const Offers = () => {
  return (
    <section className="bg-[#fafafa] py-6 lg:py-11">
      <Wrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: -100 },
          }}
        >
          <div className="pb-8">
            <div className="flex justify-center items-center mb-11">
              <h2 className="text-primary font-semibold text-5xl">
                What we offer
              </h2>
            </div>
            <div className="flex justify-center gap-4 lg:gap-8 flex-wrap">
              {offers.map((offer) => (
                <motion.div
                  key={parseInt(offer.id)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: parseInt(offer.id) * 0.3,
                  }}
                  variants={{
                    visible: { opacity: 1, translateX: 0, translateY: 0 },
                    hidden: { opacity: 0, translateX: -50, translateY: -50 },
                  }}
                >
                  <OfferCard key={offer.id} data={offer} />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center lg:mt-24 mt-12 mb-11">
              <h2 className="text-primary font-semibold text-5xl">
                Testimonials
              </h2>
            </div>
            <div className="flex gap-4 flex-wrap justify-center lg:gap-8 items-center">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={parseInt(testimonial.id)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: parseInt(testimonial.id) * 0.3,
                  }}
                  variants={{
                    visible: { opacity: 1, translateX: 0, translateY: 0 },
                    hidden: { opacity: 0, translateX: -50, translateY: -50 },
                  }}
                >
                  <TestimonialCard key={testimonial.id} data={testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </section>
  );
};
