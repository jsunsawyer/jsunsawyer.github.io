gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Smooth slowness due to fast and choppy PC mouse for presentation
let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1.2,
});

// Header
gsap.to('.header', {
  scrollTrigger: {
    trigger: ".header",
    start: 'top bottom',
    end: 'bottom 40%',
    toggleClass: {
      targets: '.image--anis',
      className: 'active',
    },
  }
});

// First paragraph
gsap.to('.h-1', {
  scrollTrigger: {
    trigger: ".h-1",
    start: 'top 65%',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-1, .image--diamond',
      className: 'active',
    },
  }
});

gsap.to('.h-2', {
  scrollTrigger: {
    trigger: ".h-2",
    start: 'top center',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-2, .image--diner',
      className: 'active',
    },
  }
});

gsap.to('.h-3', {
  scrollTrigger: {
    trigger: ".h-3",
    start: 'top center',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-3, .image--grey',
      className: 'active',
    },
  }
});

// Second paragraph
gsap.to('.h-4', {
  scrollTrigger: {
    trigger: ".h-4",
    start: 'top 55%',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-4, .image--bees',
      className: 'active',
    },
  }
});

gsap.to('.h-5', {
  scrollTrigger: {
    trigger: ".h-5",
    start: 'top center',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-5, .image--jump',
      className: 'active',
    },
  }
});

gsap.to('.h-6', {
  scrollTrigger: {
    trigger: ".h-6",
    start: 'top center',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-6, .image--silly',
      className: 'active',
    },
  }
});

gsap.to('.h-7', {
  scrollTrigger: {
    trigger: ".h-7",
    start: 'top center',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-7, .image--rabbit',
      className: 'active',
    },
  }
});

gsap.to('.h-7--2', {
  scrollTrigger: {
    trigger: ".h-7--2",
    start: 'top center',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-7--2, .image--hands',
      className: 'active',
    },
  }
});

// Third paragraph
gsap.to('.h-8', {
  scrollTrigger: {
    trigger: ".h-8",
    start: 'top 55%',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-8, .image--deer',
      className: 'active',
    },
  }
});

gsap.to('.h-9', {
  scrollTrigger: {
    trigger: ".h-9",
    start: 'top center',
    end: 'bottom 52%',
    toggleClass: {
      targets: '.h-9, .image--motorcycle',
      className: 'active',
    },
  }
});

gsap.to('.h-10', {
  scrollTrigger: {
    trigger: ".h-10",
    start: 'top 48%',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-10, .image--piano',
      className: 'active',
    },
  }
});

gsap.to('.h-11', {
  scrollTrigger: {
    trigger: ".h-11",
    start: 'top center',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-11, .image--brisket',
      className: 'active',
    },
  }
});

gsap.to('.h-12', {
  scrollTrigger: {
    trigger: ".h-12",
    start: 'top center',
    end: 'bottom 52%',
    toggleClass: {
      targets: '.h-12, .image--new-orleans',
      className: 'active',
    },
  }
});

gsap.to('.h-13', {
  scrollTrigger: {
    trigger: ".h-13",
    start: 'top 48%',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-13, .image--books',
      className: 'active',
    },
  }
});

// Last Paragraph
gsap.to('.h-14', {
  scrollTrigger: {
    trigger: ".h-14",
    start: 'top 55%',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-14, .image--death',
      className: 'active',
    },
  }
});

gsap.to('.h-15', {
  scrollTrigger: {
    trigger: ".h-15",
    start: 'top center',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-15, .image--rabbit',
      className: 'active',
    },
  }
});

gsap.to('.h-16', {
  scrollTrigger: {
    trigger: ".h-16",
    start: 'top center',
    end: 'bottom center',
    toggleClass: {
      targets: '.h-16, .image--boots',
      className: 'active',
    },
  }
});

gsap.to('.h-17', {
  scrollTrigger: {
    trigger: ".h-17",
    start: 'top center',
    end: 'bottom 0%',
    toggleClass: {
      targets: '.h-17, .image--anis-2',
      className: 'active',
    },
  }
});
