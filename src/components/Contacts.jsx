import {motion} from 'framer-motion';
import {contactsTextVariants, iconVariants} from '../constants/animationVariants.js';
import {CONTACT_CONTENT} from '../constants/index.js';
import {RiGithubFill, RiLinkedinFill, RiTwitterXFill} from '@remixicon/react';


const Contacts = () => {
    return (
        <section className='min-h-screen flex flex-col justify-center px-4 md:px-10 ' id='contact'>
            <div className='w-fit'>
                <div>
                    <h2 className='text-4xl md:text-6xl font-medium tracking-tight mb-10 '>
                        Contact
                    </h2>
                    <div className='h-1 w-[100%] mb-8 bg-white'></div>
                </div>
            </div>
            <motion.h3
                className='text-6xl md:text-8xl leading-none'
                initial='hidden'
                whileInView='visible'
                custom={0.4}
                variants={contactsTextVariants}
            >
                {CONTACT_CONTENT.headline}
            </motion.h3>
            <motion.p
                className='text-lg
            md:text-2xl mt-6 max-w-3xl'
                initial='hidden' whileInView='visible'
                custom={0.6}
                variants={contactsTextVariants}>
                {CONTACT_CONTENT.description}
            </motion.p>

            <motion.a
                href={`mailto:${CONTACT_CONTENT.email}`}
                className='text-2xl mdtext-3xl font-medium mt-8'
                initial='hidden'
                whileInView='visible'
                custom={0.8}
                variants={contactsTextVariants}>
                {CONTACT_CONTENT.email}
            </motion.a>

            <div className='flex space-x-6 mt-8'>
                {CONTACT_CONTENT.socialLinks.map(({platform, url, ariaLabel, icon}, index) => {
                    const Icon =
                        icon
                        === 'RiTwitterXFill'
                            ? RiTwitterXFill
                            : icon
                            === 'RiGithubFill'
                                ? RiGithubFill
                                : RiLinkedinFill;
                    return (
                        <motion.a
                            key={platform}
                            href={url}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={ariaLabel}
                            initial='hidden'
                            whileInView='visible'
                            custom={1 + index * 0.2}
                            variants={iconVariants}
                        >
                            <Icon size={36}/>
                        </motion.a>
                    )
                })}
            </div>

            <motion.p
                className='text-sm text-stone-400 mt-36'
                initial='hidden'
                whileInView='visible'
                custom={1.6}
                variants={contactsTextVariants}
            >
                {CONTACT_CONTENT.footerText}
            </motion.p>
        </section>
    );
};

export default Contacts;