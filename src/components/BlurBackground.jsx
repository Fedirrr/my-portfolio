import {motion} from "framer-motion";
import {animate, animateStyles, animationVariants} from "../constants/animationVariants.js";


const BlurBackground = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10
        pointer-events-none flex justify-center items-center filter blur-[100px]'>
            {
                animate.map((el, index) => (
                    <motion.div
                        key={el}
                        className={animateStyles[index]}
                        variants={animationVariants}
                        animate={el}>
                    </motion.div>
                ))
            }
        </div>
    );
};

export default BlurBackground;