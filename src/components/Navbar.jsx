import {useState} from "react";
import {LINKS} from "../constants/index.js";
import {RiCloseFill, RiMenu3Fill} from "@remixicon/react";
import {motion} from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(!menuOpen)
    }

    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
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
                duration: 0.2,
            },
        },
    };

    return (
        <nav className='fixed top-0 left-0 w-full z-50'>
            <div className=' flex justify-between items-center max-w-6xl mx-auto
            md:my-2 bg-stone-950/30 p-4 backdrop-blur-1g'>
                <div className=' text-white font-semibold text-lg uppercase'>
                    <a href="/">
                        Fedir Pavlyshynets
                    </a>
                </div>

                <div className='hidden md:flex space-x-8'>
                    {LINKS.map(({href, label}) => (<a
                        href={href}
                        key={label}
                        className='text-white hover:text-stone-400 transition duration-300'>
                        {label}
                    </a>))}
                </div>

                <div className='md:hidden'>
                    <button
                        onClick={handleLinkClick}
                        className='text-white focus:outline-none'
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? (<RiCloseFill className='w-6 h-6'/>) : (<RiMenu3Fill className='w-6 h-6'/>)}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <motion.div
                    className='md:hidden p-2 bg-stone-950/30 backdrop-blur-lg
                 flex flex-col space-y-4 max-w-6xl mx-auto'
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                >
                    {LINKS.map(({href, label}) => (
                        <a
                            href={href}
                            key={label}
                            className='text-white hover:text-stone-400 transition duration-300'
                            onClick={handleLinkClick}
                        >
                            {label}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;