import { type Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/** Spring-physics entrance — more energetic than plain fadeUp (used on Students / Parents / About) */
export const springUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 380, damping: 26, mass: 0.9 },
  },
};

/** Card pop — scale + y with spring, for card row entrances */
export const popIn: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 350, damping: 22, mass: 1 },
  },
};

/** Faster stagger for tighter card grids */
export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
