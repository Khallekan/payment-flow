import { Variants } from "framer-motion";

export const variants: Variants = {
  initial_left: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "linear",
    },
  },
  initial_right: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "linear",
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "linear",
    },
  },
  exit_left: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "linear",
    },
  },
  exit_right: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "linear",
    },
  },
};
