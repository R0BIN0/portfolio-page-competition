import { Variants } from "framer-motion";

const ease = [0.7, 0, 0.15, 1];
const transitionTime = 1;

// Animation in index.tsx
export const projectTransition: Variants = {
  show: {
    position: "fixed",
    top: 0,
    left: 0,
    transform: "translateY(0vh) skewY(0deg)",
  },
  hidden: {
    position: "fixed",
    top: 0,
    left: 0,
    transform: "translateY(-120vh) skewY(-5deg)",
    transition: {
      duration: transitionTime,
      ease: ease,
    },
  },
};

export const goToMeTransition: Variants = {
  hidden: {
    position: "fixed",
    top: 0,
    left: 0,
    transform: "translateY(-120vh) skewY(-5deg)",
  },
  exit: {
    transform: "translateY(0vh) skewY(0deg)",
    transition: {
      duration: 1,
      ease: ease,
    },
  },
};

export const loader: Variants = {
  hidden: {
    transform: "translateY(10px)",
    opacity: 0,
  },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: ease,
    },
  },
  exit: {
    transform: "translateY(10px)",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: ease,
    },
  },
};

export const modalSuccess: Variants = {
  hidden: {
    transform: "translateY(-10px)",
    opacity: 0,
  },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: ease,
    },
  },
  exit: {
    transform: "translateY(10px)",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: ease,
    },
  },
};

export const darkBackground: Variants = {
  hidden: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  show: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",

    transition: {
      duration: 1.75,
      ease: ease,
    },
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: {
      duration: 1.75,
      ease: ease,
    },
  },
};

export const formCardAnimation: Variants = {
  hidden: {
    transform: "translate(-50%, 100%) rotate(10deg)",
  },
  show: {
    transform: "translate(-50%, -50%) rotate(0deg)",
    transition: {
      duration: 1.3,
      ease: ease,
    },
  },
  exit: {
    transform: "translate(-50%, -200%) rotate(-10deg)",
    transition: {
      duration: 1.3,
      ease: ease,
    },
  },
};

// Animations on projet.tsx
export const animation: Variants = {
  hidden: {
    position: "fixed",
    top: 0,
    left: 0,
    transform: "translateY(120vh) skewY(5deg)",
  },
  exit: {
    transform: "translateY(0vh) skewY(0deg)",
    transition: {
      duration: 1,
      ease: ease,
    },
  },
};

export const sectionAnimationProject: Variants = {
  hidden: {
    transform: "translateY(50px)",
    opacity: 0,
  },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.79, 0.14, 0.15, 0.86],
    },
  },
};

// Animations on Me.tsx

export const transition: Variants = {
  show: {
    position: "fixed",
    top: 0,
    left: 0,
    transform: "translateY(0vh) skewY(0deg)",
  },
  hidden: {
    position: "fixed",
    top: 0,
    left: 0,
    transform: "translateY(120vh) skewY(5deg)",
    transition: {
      duration: transitionTime,
      ease: ease,
    },
  },
  exit: {
    transform: "translateY(0vh) skewY(0deg)",
    transition: {
      duration: 1,
      ease: ease,
    },
  },
};

export const sectionAnimationMe: Variants = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const items: Variants = {
  hidden: {
    transform: "translateY(50px)",
    opacity: 0,
  },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.79, 0.14, 0.15, 1],
    },
  },
};

export const imageAnimation = {
  hidden: {
    transform: "scale(1.5)",
  },
  show: {
    transform: "scale(1)",
    transition: {
      duration: 0.85,
      ease: [0.79, 0.14, 0.15, 1],
    },
  },
};
