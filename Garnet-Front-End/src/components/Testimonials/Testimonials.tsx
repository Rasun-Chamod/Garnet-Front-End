import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amira G.",
    role: "Founder, Atelier Lumiere",
    review:
      "GARNET transformed our product into a digital experience that feels calm, cinematic, and incredibly premium.",
  },
  {
    name: "Hugo R.",
    role: "Creative Director, Velvet Atelier",
    review:
      "Every interaction feels deliberate. The team balanced restraint with the right amount of drama.",
  },
  {
    name: "Lena S.",
    role: "Head of Growth, Casa Miro",
    review:
      "We saw a measurable lift in inquiries after launch. The experience feels crafted, not templated.",
  },
];

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

function Testimonials() {
  return (
    <section className="border-t border-garnet-line bg-[#0e0b11] px-6 py-20 text-white md:px-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Trusted by founders who value craft.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/70">
            Our partners describe experiences that feel refined, intentional,
            and unmistakably premium.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[24px] border border-white/10 bg-white/5 p-8 transition"
            >
              <p className="text-sm leading-relaxed text-white/70">
                “{item.review}”
              </p>
              <div className="mt-6">
                <p className="font-display text-lg">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
