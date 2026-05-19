import { motion } from 'framer-motion'
import { FiCompass, FiLayers, FiFeather } from 'react-icons/fi'
import SectionHeading from '../SectionHeading/SectionHeading'
import { fadeUp, stagger } from '../../animations/variants'

const services = [
  {
    title: 'Brand-led UI systems',
    description:
      'We distill your brand into a modular interface system that feels cohesive across every touchpoint.',
    icon: FiLayers,
  },
  {
    title: 'Launch experiences',
    description:
      'Immersive landing pages and campaigns designed to amplify launches and raise perceived value.',
    icon: FiCompass,
  },
  {
    title: 'Motion direction',
    description:
      'Subtle micro-interactions and cinematic transitions that elevate the perception of craft.',
    icon: FiFeather,
  },
]

function Services() {
  return (
    <section className="border-t border-garnet-line px-6 py-20 md:px-12">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="What we do"
            title="Elevate the full customer journey."
            subtitle="Our services blend strategy, design, and front-end excellence to build a premium digital presence."
          />
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="rounded-[24px] border border-garnet-line bg-white/70 p-8 shadow-garnet"
              >
                <Icon className="text-xl text-garnet-ink" />
                <h3 className="mt-6 font-display text-xl text-garnet-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-garnet-muted">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
        {/* TODO: Replace services list with CMS-driven content. */}
      </motion.div>
    </section>
  )
}

export default Services
