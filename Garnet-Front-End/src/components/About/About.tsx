import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import { fadeUp, stagger } from "../../animations/variants";

const stats = [
  { label: "Projects delivered", value: "48+" },
  { label: "Average client NPS", value: "9.6" },
  { label: "Markets supported", value: "12" },
];

function About() {
  return (
    <section className="border-t border-garnet-line px-6 py-20 md:px-12">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <motion.div variants={fadeUp} className="space-y-6">
          <SectionHeading
            eyebrow="Our point of view"
            title="Luxury is a feeling, not a filter."
            subtitle="We believe premium brands deserve digital experiences that are calm, confident, and unmistakably intentional. Our design language is rooted in editorial restraint and refined motion."
          />
          <p className="text-base leading-relaxed text-garnet-muted">
            Every GARNET experience is built with a clear hierarchy, generous
            whitespace, and subtle motion that invites focus. We partner with
            ambitious founders to translate brand ambition into tangible
            conversion moments.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="space-y-6">
          <div className="rounded-[28px] border border-garnet-line bg-white/70 p-8 shadow-garnet">
            <p className="text-xs uppercase tracking-[0.35em] text-garnet-muted">
              Studio focus
            </p>
            <h3 className="mt-4 font-display text-2xl text-garnet-ink">
              Editorial systems for modern products
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-garnet-muted">
              We craft reusable UI systems with a luxury sensibility, so your
              product can scale without losing its signature tone.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-garnet-line bg-garnet-warm/70 p-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-garnet-muted">
                  {item.label}
                </p>
                <p className="mt-3 font-display text-2xl text-garnet-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          {/* TODO: Replace stats with live analytics data. */}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
