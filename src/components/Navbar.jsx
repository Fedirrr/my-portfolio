import {useState, useMemo} from "react";
import {LINKS} from "../constants/index.js";
import {RiCloseFill, RiMenu3Fill} from "@remixicon/react";
import {motion, AnimatePresence} from "framer-motion";
import {menuVariants} from "../constants/animationVariants.js";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const renderLinks = useMemo(() =>
        LINKS.map(({href, label}) => (
            <a
                href={href}
                key={label}
                className='text-white hover:text-stone-400 transition duration-300'
                onClick={() => setMenuOpen(false)}
            >
                {label}
            </a>
        )), []);

    return (
        <nav className='fixed top-0 left-0 w-full z-50'>
            <div className='flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 backdrop-blur-lg'>
                <div className='text-white font-semibold text-lg uppercase'>
                    <a href="/">Fedir Pavlyshynets</a>
                </div>

                <div className='hidden md:flex space-x-8'>
                    {renderLinks}
                </div>

                <div className='md:hidden'>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='text-white focus:outline-none'
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className='md:hidden p-2 bg-stone-950/30 backdrop-blur-lg flex flex-col space-y-4 max-w-6xl mx-auto'
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        {renderLinks}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;