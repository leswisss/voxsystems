const transition = {duration: 0.8, ease: [0.87, 0, 0.13, 1]}

/**Navbar Animations */
export const topBurgerAnim = {
  initial: {
    rotate: 0,
    top: "-3px",
    transition: {
      top: { delay: 0.3, duration: 0.3, ease: [0.87, 0, 0.13, 1] },
      rotate: { duration: 0.3, ease: [0.87, 0, 0.13, 1] }
    }
  }, 

  entry: {
    rotate: 45,
    top: "0px",
    transition: {
      width: { duration: 0.3, ease: [0.87, 0, 0.13, 1] },
      top: { delay: 0.3, duration: 0.3, ease: [0.87, 0, 0.13, 1] },
      rotate: { delay: 0.6, duration: 0.3, ease: [0.87, 0, 0.13, 1] },
      backgroundColor: { delay: 0.9, duration: 0.3, ease: [0.87, 0, 0.13, 1] },
    }
  }
}


export const bottomBurgerAnim = {
  initial: {
    rotate: 0,
    bottom: "-3px",
    transition: {
      bottom: { delay: 0.3, duration: 0.3, ease: [0.87, 0, 0.13, 1] },
      rotate: { duration: 0.3, ease: [0.87, 0, 0.13, 1] },
    }
  }, 

  entry: {
    rotate: -45,
    bottom: "1px",
    transition: {
      bottom: { delay: 0.3, duration: 0.3, ease: [0.87, 0, 0.13, 1] },
      rotate: { delay: 0.6, duration: 0.3, ease: [0.87, 0, 0.13, 1] },
      backgroundColor: { delay: 0.9, duration: 0.3, ease: [0.87, 0, 0.13, 1] }
    }
  }
}

export const burgerAnim = {
  initial: {
    backgroundColor: "transparent",
  },

  entry: {
    backgroundColor: "#895139",
    transition: { duration: 1, ease: [0.32, 0, 0.67, 0], delay: 0.9}
  }
}


/**============= SIDEBAR ANIMATIONS =============== */
export const sideBarAnim = {
  initial: {
    x: "100%",
  },

  entry: {
    x: "0",
    transition: transition
  },

  exit: {
    x: "100%",
    transition: transition
  }
}

export const sideMaskAnim = {
  initial: {
    x: "-100%",
    opacity: 0
  },

  entry: {
    x: "0",
    opacity: 1,
    transition: { ...transition, delay: 0.5}
  },

  exit: {
    x: "-100%",
    opacity: 0,
    transition: transition
  }
}


export const loadingVariants = {
  initial: {
    scale: [1, 2, 1],
    opacity: [1, 0.5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 1,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

/**TEAM SECTION ANIMATION */
export const scaleAnimation = {
  initial: {scale: 0, x: "-50%", y: "-50%"},
  entry: {scale: 1, x: "-50%", y: "-50%" , transition: { duration: 0.4, ease: [0.87, 0, 0.13, 1]} },
  exit: {scale: 0, x: "-50%", y: "-50%" ,transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0]}},
}

/**SOLAR COVER ANIMATION */
export const coverAnimation = {
  initial: {
    scale: 1,
  },
  exit: {
    scale: 0,
    transition: transition
  }
}


/**Landing Page VISION Anim */
export const imageScaleAnim = {
  initial: {opacity: 0},
  entry: {opacity: 1, transition: { duration: 1, ease: [0.87, 0, 0.13, 1]} },
  exit: {opacity: 0, transition: { duration: 1, ease: [0.32, 0, 0.67, 0]}},
}

export const visionHeaderAnim = {
  initial: {y: "100%"},
  entry: {y: 0, transition: { duration: 0.4, ease: [0.87, 0, 0.13, 1]}, delay: 0.4 },
  exit: {y: "-100%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0]}},
}



/**ANIMATIONS ON APPEAR */
/**SLIDE FROM BOTTOM */

export const HomeHeroSlogan = {
  initial: {y: "100%"},
  entry: {y: 0, transition: { duration: 0.7, ease: [0.32, 0, 0.67, 0]}},
}

export const HomeHeroFooter = {
  initial: {y: "200px"},
  entry: {y: 0, transition: { duration: 0.7, ease: [0.32, 0, 0.67, 0]}}, de,
}