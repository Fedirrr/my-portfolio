import {motion} from "framer-motion";
import {experienceContainerVariants} from "../constants/animationVariants.js";
import {SKILLS_CONTENT} from "../constants/index.js";


const Skills = () => {
    return (
        <section className="px-6 py-10" id="skills">
            <h1 className=' text-4xl md:text-6xl font-medium tracking-tight mb-10'>
                Skills
            </h1>
            <div className='h-1 w-20 mb-8 bg-white'></div>

            <motion.div
                className='space-y-10'
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.3}}
                variants={experienceContainerVariants}
            >
                {SKILLS_CONTENT.map(({ name, stack }) => (
                    <motion.div key={name}>
                        <div className='flex flex-col md:flex-row md:justify-between'>
                            <div className='text-smmd: w-1/4 mb-2 md:mb-0 p-4'>
                                {name}
                            </div>
                            <div className='md:w-3/4 mb-10'>
                                <div className='max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg'>
                                    <ul
                                        className={`list-disc list-inside space-y-2 ${stack.length > 4 ? 'flex justify-between flex-wrap' : ''}`}
                                    >
                                        {stack.map((techStack) => (
                                            <li key={techStack} className={`${stack.length > 4 ? 'w-[45%]' : ''}`}>
                                                {techStack}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;