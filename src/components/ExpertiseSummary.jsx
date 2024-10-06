import {childVariants, experienceContainerVariants} from "../constants/animationVariants.js";
import {motion} from "framer-motion";

const ExpertiseSummary = ({dataArray}) => {
    return (

        <motion.div
            className='space-y-10'
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.3}}
            variants={experienceContainerVariants}
        >
            {dataArray.map(({name, items, job, location, summary}) => (
                <motion.div
                    key={name}
                    variants={childVariants}
                >
                    <div className='flex flex-col md:flex-row md:justify-between'>

                        <div className='text-sm md:w-1/4 mb-2 md:mb-0 p-4'>
                            {name}
                        </div>

                        <div className='md:w-3/4 mb-10'>
                            <div className='max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg'>
                                {job && (
                                    <h2 className='text-xl mb-2'>
                                        {job}
                                    </h2>
                                )}
                                {location && (
                                    <p className='mb-4 text-sm italic'>
                                        {location}
                                    </p>
                                )}
                                <ul className='list-disc list-inside space-y-2 mb-2 text-sm'>
                                    {items.map((desc, index) => (
                                        <li key={index}>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                                {summary && (
                                    <div className='mt-8'>
                                        <h2 className='text-xl mb-2'>
                                            Responsibilities:
                                        </h2>
                                        <ul className='list-disc list-inside space-y-2 text-sm'>
                                            {summary.map((desc,index) => (
                                                <li key={index}>
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

            ))}
        </motion.div>
    );
};

export default ExpertiseSummary;