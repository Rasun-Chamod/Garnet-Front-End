import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function About() {
  return (
    <section className="border-t border-garnet-line px-6 py-20 md:px-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.05fr]"
      >
        <motion.div variants={fadeUp} className="group relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-garnet-line bg-garnet-warm/70 shadow-garnet transition-transform duration-500 group-hover:-translate-y-2">
            <div className="h-full w-full bg-[linear-gradient(135deg,rgba(163,20,58,0.2),rgba(14,11,17,0.6))]" />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.35em] text-garnet-muted">
            Studio portrait
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
              Who We Are
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-garnet-ink md:text-4xl">
              Crafted experiences for ambitious brands.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-garnet-muted">
              Garnet delivers innovative software, creative technology, and
              scalable digital experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Mission",
                copy:
                  "Build premium digital products that feel intentional, modern, and human.",
              },
              {
                label: "Vision",
                copy:
                  "Redefine how modern brands present their technology with clarity and confidence.",
              },
              {
                label: "Core Values",
                copy:
                  "Craft, clarity, and collaboration guide everything we design and deliver.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group rounded-[20px] border border-garnet-line bg-white/70 p-6 transition hover:-translate-y-1 hover:shadow-garnet"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-garnet-muted">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
