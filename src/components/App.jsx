import BlurBackground from "./BlurBackground.jsx";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Projects from "./Projects.jsx";
import About from "./About.jsx";
import Contacts from "./Contacts.jsx";
import ExpertiseSummary from "./ExpertiseSummary.jsx";
import {EXPERIENCES, SKILLS_CONTENT} from "../constants/index.js";
import Section from "./Section.jsx";

const App = () => {
    return (
        <>
            <BlurBackground/>
            <main className='antialiased overflow-hidden max-w-7xl mx-auto relative z-10 pt-8'>
                <Navbar/>
                <Hero/>
                <Projects/>
                <About/>
                <Section
                    title='Skills'
                    content={<ExpertiseSummary dataArray={SKILLS_CONTENT}/>}
                    id='skills'/>
                <Section
                    title='Experience'
                    content={<ExpertiseSummary dataArray={EXPERIENCES}/>}
                    id='experience'/>
                <Contacts/>
            </main>
        </>
    );
};

export default App;