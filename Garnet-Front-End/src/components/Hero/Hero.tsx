import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../animations/variants";

function Hero() {
  return (
    <section className="px-6 pb-20 pt-16 md:px-12 md:pt-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <motion.div variants={fadeUp} className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
            Crafting modern luxury for ambitious brands
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-garnet-ink md:text-6xl">
            GARNET shapes premium digital spaces that feel as curated as a
            gallery.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-garnet-muted md:text-lg">
            We translate visionary products into immersive front ends, balancing
            editorial typography, confident whitespace, and motion that feels
            intentional.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-garnet-ink px-6 py-3 text-xs uppercase tracking-[0.35em] text-garnet-cream transition hover:translate-y-0.5"
            >
              Start a project
            </Link>
            <Link
              to="/portfolio"
              className="rounded-full border border-garnet-line px-6 py-3 text-xs uppercase tracking-[0.35em] text-garnet-ink transition hover:border-garnet-ink"
            >
              View portfolio
            </Link>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="relative">
          <div className="aspect-[3/4] rounded-[32px] border border-garnet-line bg-white/70 p-8 shadow-garnet backdrop-blur">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
                  Signature digital launch
                </p>
                <h3 className="mt-4 font-display text-2xl text-garnet-ink">
                  Atelier Lumiere
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-garnet-muted">
                  A tactile visual system for a luxury fragrance studio.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-garnet-line bg-garnet-warm/70 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-garnet-muted">
                    Timeline
                  </p>
                  <p className="mt-3 font-display text-xl text-garnet-ink">
                    8 weeks
                  </p>
                </div>
                <div className="rounded-2xl border border-garnet-line bg-garnet-warm/70 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-garnet-muted">
                    Launch
                  </p>
                  <p className="mt-3 font-display text-xl text-garnet-ink">
                    Spring 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full border border-garnet-line bg-white/70 md:block" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
