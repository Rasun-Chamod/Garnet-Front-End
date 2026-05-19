import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import { fadeUp, stagger } from "../../animations/variants";

const testimonials = [
  {
    quote:
      "GARNET translated our brand into a digital presence that instantly elevated investor perception.",
    name: "Amira G.",
    role: "Founder, Atelier Lumiere",
  },
  {
    quote:
      "The site feels like a gallery walk. Every section flows with intention and polish.",
    name: "Hugo R.",
    role: "Creative Director, Velvet Atelier",
  },
  {
    quote:
      "The team balanced minimalism with conversion goals. Our bookings doubled after launch.",
    name: "Lena S.",
    role: "Head of Growth, Casa Miro",
  },
];

function Testimonials() {
  return (
    <section className="border-t border-garnet-line px-6 py-20 md:px-12">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto max-w-6xl space-y-12"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by founders who value craft."
            subtitle="Every partnership is bespoke. Here is how leaders describe the experience."
          />
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              className="rounded-[24px] border border-garnet-line bg-white/70 p-8 shadow-garnet"
            >
              <p className="text-sm leading-relaxed text-garnet-muted">
                "{item.quote}"
              </p>
              <div className="mt-6">
                <p className="font-display text-lg text-garnet-ink">
                  {item.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-garnet-muted">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* TODO: Replace testimonials with live client feedback. */}
      </motion.div>
    </section>
  );
}

export default Testimonials;
