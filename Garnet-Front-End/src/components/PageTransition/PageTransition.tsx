import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PageTransitionProps = {
  children: ReactNode;
};

const transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -24, transition: { duration: 0.5, ease: [0.4, 0, 1, 1] } },
};

function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
