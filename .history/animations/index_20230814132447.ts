/**Navbar Animations */
export const topBurgerAnim = {
  initial: {
    rotate: 0,
    top: "15px",
    transition: {
      top: { delay: 0.3, duration: 0.3, ease: [0.87, 0, 0.13, 1] },
      rotate: { duration: 0.3, ease: [0.87, 0, 0.13, 1] }
    }
  }, 

  entry: {
    rotate: 45,
    top: "20px",
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
    bottom: "15px",
    transition: {
      bottom: { delay: 0.3, duration: 0.3, ease: [0.87, 0, 0.13, 1] },
      rotate: { duration: 0.3, ease: [0.87, 0, 0.13, 1] },
    }
  }, 

  entry: {
    rotate: -45,
    bottom: "19px",
    backgroundColor: "#fbead0",
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