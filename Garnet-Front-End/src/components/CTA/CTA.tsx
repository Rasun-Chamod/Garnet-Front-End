import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants'

function CTA() {
  return (
    <section className="border-t border-garnet-line px-6 py-20 md:px-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        className="mx-auto max-w-6xl rounded-[32px] border border-garnet-line bg-garnet-ink px-10 py-12 text-garnet-cream md:px-14"
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-garnet-cream/70">
              Ready to begin
            </p>
            <h3 className="mt-4 font-display text-3xl md:text-4xl">
              Build a digital presence with lasting allure.
            </h3>
          </div>
          <Link
            to="/contact"
            className="rounded-full border border-garnet-cream/40 px-6 py-3 text-xs uppercase tracking-[0.35em] transition hover:border-garnet-cream"
          >
            Schedule a call
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
