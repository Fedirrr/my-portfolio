import {motion} from "framer-motion";
import {PROJECTS} from "../constants/index.js";
import {projectsVariants} from "../constants/animationVariants.js";


const Projects = () => {
    return (
        <section className="px-6 py-10" id="work">
            <h1 className='text-4xl md:text-6xl font-medium tracking-tight'>
                Work
            </h1>
            <div className="h-1 w-20 mb-8 bg-white"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PROJECTS.map(({name, description, image, link, website, commercial}) => (
                    <motion.div
                        key={name}
                        className="relative rounded-lg overflow-hidden h-[500px] group cursor-pointer"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={projectsVariants}
                    >
                        <img
                            src={image}
                            alt={name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                        />
                        <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-medium mb-4">{name}</h2>
                                <div className="text-[8px]">
                                    {commercial ? "*Commercial" : "*Pet project"}
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                <p className="mb-4 flex-grow text-2xl">{description}</p>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener norefferer"
                                    className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center"
                                >
                                    {website ? "View the project" : "View on Github"}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;