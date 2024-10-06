export const animationVariants = {
    animate1: {
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        }
    },
    animate2: {
        scale: [1, 1.1, 1],
        x: [0, 120, 0],
        y: [0, -60, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        }
    },
    animate3: {
        scale: [1, 1.3, 1],
        x: [0, 140, 0],
        y: [0, 70, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }
    },
    animate4: {
        scale: [1, 1.5, 1],
        x: [0, 180, 0],
        y: [0, 90, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }
    },
    animate5: {
        scale: [1, 1.4, 1],
        x: [0, 160, 0],
        y: [0, -80, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        }
    },
    animate6: {
        scale: [1, 1.6, 1],
        x: [0, 200, 0],
        y: [0, -100, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }
    },
}

export const projectsVariants = {
    hidden: {opacity: 0, y: 50, scale: 0.8, rotate: -40,},
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            type: 'spring',
            bounce: 0.4,
        }
    },
}
export const aboutTextVariants = {
    hidden: {opacity: 0, y: 50,},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        }
    },
}

export const menuVariants = {
    hidden: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const experienceContainerVariants = {
    hidden: {opacity: 0, y: 50,},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.3,
        }
    },
}

export const childVariants = {
    hidden: {opacity: 0, y: 30,},
    visible: {opacity: 1, y: 0,},
    transition: {
        duration: 0.6,
        ease: "easeOut",
    }
}
export const contactsTextVariants = {
    hidden: {opacity: 0, y: 20,},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        }
    }
}

export const iconVariants = {
    hidden: {opacity: 0, scale: 0,},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",

        }
    }
}

export const textVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
        opacity: 1, y: 0,
        transition: {duration: 0.8, ease: "easeOut"}
    },
}

export const containerVariants = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.3}
    },
}
export const imgVariants = {
    hidden: {clipPath: 'inset(0 50% 0 50%)'},
    visible: {
        clipPath: 'inset(0 0% 0 0%)',
        transition: {duration: 1.2, ease: "easeInOut"}
    },
}

export const animate = [
    'animate1',
    'animate2',
    'animate3',
    'animate4',
    'animate5',
    'animate6',
]
export const animateStyles = [
    'bg-yellow-500 w-[350px] h-[250px] rounded-full absolute',
    'bg-orange-500 w-[360px] h-[260px] rounded-full absolute',
    'bg-green-500 w-[370px] h-[270px] rounded-full absolute',
    'bg-purple-500 w-[380px] h-[280px] rounded-full absolute',
    'bg-blue-500 w-[390px] h-[290px] rounded-full absolute',
    'bg-pink-500 w-[400px] h-[300px] rounded-full absolute',
]

