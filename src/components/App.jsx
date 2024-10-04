import BlurBackground from "./BlurBackground.jsx";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Projects from "./Projects.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Contacts from "./Contacts.jsx";
import Skills from "./Skills.jsx";

const App = () => {
    return (
        <>
            <BlurBackground/>
            <Navbar/>
            <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'>
                <Navbar/>
                <Hero/>
                <Projects/>
                <About/>
                <Skills/>
                <Experience/>
                <Contacts/>
            </main>
        </>
    );
};

export default App;