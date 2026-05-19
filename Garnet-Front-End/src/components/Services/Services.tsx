import { motion } from 'framer-motion'
import {
  FiGlobe,
  FiCpu,
  FiLayout,
  FiCloud,
  FiBarChart2,
  FiAperture,
} from 'react-icons/fi'

const services = [
  {
    title: 'Web Development',
    description:
      'High-performance web experiences crafted with precision and clarity.',
    icon: FiGlobe,
  },
  {
    title: 'Software Solutions',
    description:
      'Custom software platforms built to scale and evolve with your vision.',
    icon: FiCpu,
  },
  {
    title: 'UI UX Design',
    description:
      'Editorial interface systems that balance beauty and usability.',
    icon: FiLayout,
  },
  {
    title: 'AI Solutions',
    description:
      'Intelligent systems that elevate decision-making and customer value.',
    icon: FiAperture,
  },
  {
    title: 'Data Analytics',
    description:
      'Actionable insights through refined dashboards and data storytelling.',
    icon: FiBarChart2,
  },
  {
    title: 'Cloud Systems',
    description:
      'Secure, resilient infrastructure designed for modern operations.',
    icon: FiCloud,
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function Services() {
  return (
    <section className="border-t border-garnet-line px-6 py-24 md:px-12 md:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={fadeUp} className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
            Services
          </p>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] text-garnet-ink md:text-4xl">
            Premium capabilities for ambitious digital products.
          </h2>
          <p className="text-base leading-relaxed text-garnet-muted">
            We blend strategy, design, and engineering to deliver systems that
            feel refined, modern, and future-ready.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-[24px] border border-garnet-line bg-white/70 p-8 shadow-garnet transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-garnet-line text-garnet-ink">
                  <Icon className="text-xl" aria-hidden="true" />
                </div>
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
      </motion.div>
    </section>
  )
}

export default Services
