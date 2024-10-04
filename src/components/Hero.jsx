import {motion} from "framer-motion";
import {HERO_CONTENT} from "../constants/index.js";
import me from '../assets/1.webp'
import {containerVariants, imgVariants, textVariants} from "../constants/animationVariants.js";


const Hero = () => {
    return (
        <section>
            <div className='relative z-10 min-h-screen flex flex-wrap flex-col
            md:flex-row items-center justify-center text-white'>
                <motion.div
                    className="w-full md:w-1/2 p-8"
                    initial='hidden'
                    animate='visible'
                    variants={containerVariants}
                >
                    <motion.h1
                        className='text-2xl md:text-3xl lg:text-5xl my-14'
                        variants={textVariants}
                    >
                        {HERO_CONTENT.greeting}
                    </motion.h1>
                    <motion.p
                        className='text-xl md:text-2xl 1g:text-4xl mb-4'
                        variants={textVariants}>
                        {HERO_CONTENT.introduction}
                    </motion.p>
                    <motion.p
                        className='text-xl md:text-2xl 1g:text-4xl mb-4'
                        variants={textVariants}>
                        {HERO_CONTENT.description}
                    </motion.p>

                    <motion.a
                        className='bg-stone-50 text-stone-900 p-3
                    lg:p-4 mt-8 inline-block rounded-2x1 hover:bg-gray-100 '
                        href={HERO_CONTENT.resumeLink}
                        download
                        rel=" noopener noreferrer"
                        target="_blank"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.resumeLinkText}
                    </motion.a>
                </motion.div>


                <motion.div
                    className="w-full md:w-1/2 p-8"
                    initial="hidden"
                    animate="visible"
                    variants={imgVariants}
                >
                    <img src={me} alt="me" width={650} height={650}
                         className='rounded-3xl'/>
                </motion.div>
            </div>
        </section>
    )
};

export default Hero;