import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import { fadeUp } from "../../animations/variants";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="px-6 pb-16 pt-24 md:px-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl"
      >
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </motion.div>
    </section>
  );
}

export default PageHeader;
