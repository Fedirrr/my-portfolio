import {motion} from "framer-motion";
import {ABOUT_CONTENT} from "../constants/index.js";
import {aboutTextVariants} from "../constants/animationVariants.js";
import Section from "./Section.jsx";

const About = () => {
    return (
        <Section
            id={'about'}
            title={'About'}
            content={<div className='max-w-4xl mx-auto'>
                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                    <motion.p
                        className='text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed'
                        initial="hidden" whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        key={index}
                        variants={aboutTextVariants}
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </div>}
        />
    );
};

export default About;