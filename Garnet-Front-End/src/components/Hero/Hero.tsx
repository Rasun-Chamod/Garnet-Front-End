import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0e0b11] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-[rgba(163,20,58,0.35)] blur-[140px]" />
        <div className="absolute right-[-20%] top-[15%] h-[560px] w-[560px] rounded-full bg-[rgba(97,32,63,0.35)] blur-[160px]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(163,20,58,0.18),transparent_45%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-24 pt-32 md:px-12 md:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-4xl space-y-8 md:space-y-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.45em] text-white/60"
          >
            GARNET
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-6xl lg:text-7xl"
          >
            Digital Innovation Crafted With Precision.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg lg:text-xl"
          >
            Garnet builds modern software experiences, intelligent digital
            products, and transformative technology solutions.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/portfolio"
                className="inline-flex rounded-full bg-white px-7 py-3 text-xs uppercase tracking-[0.35em] text-[#0e0b11] transition hover:-translate-y-0.5"
              >
                Explore Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex rounded-full border border-white/30 px-7 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:border-white"
              >
                Start Project
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
