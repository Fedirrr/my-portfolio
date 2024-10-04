import projects1 from '../assets/wwe.webp';
import projects2 from '../assets/studyUk.webp';
import projects3 from '../assets/archewlo2.webp';
import projects4 from '../assets/apple.webp';
import projects5 from '../assets/disney.webp';
import projects6 from '../assets/news.webp';

export const LINKS = [
    {href: '#work', label: 'Work'},
    {href: '#about', label: 'About'},
    {href: '#skills', label: 'Skills'},
    {href: '#experience', label: 'Experience'},
    {href: '#contact', label: 'Contact'},
];

export const HERO_CONTENT = {
    greeting: 'Hey there! 🖐️',
    introduction:
        `I'm Fedir Pavlyshynets, a creative frontend developer, crafting immersive and intuitive web experiences.`,
    description:
        `I'm currently helping businesses bring their visions to life through interactive digital solutions.`,
    resumeLinkText: 'Download Resume',
    resumeLink: '/CV_Fedir_Pavlyshynets.pdf',
};

export const PROJECTS = [
    {
        name: 'WWE Wrestlemania Tickets',
        description: 'A platform dedicated to selling WWE tickets.',
        image: projects1,
        link: 'https://onlocationexp.com/wwe',
        website: true,
        commercial: true,
    },
    {
        name: 'Study-UK',
        description: 'Educational resource platform for student success.',
        image: projects2,
        link: 'https://study-uk.britishcouncil.org/',
        website: true,
        commercial: true,
    },
    {
        name: 'Archello',
        description: 'Construction project management platform with blueprints and collaboration tools.',
        image: projects3,
        link: 'https://archello.com/',
        website: true,
        commercial: true,
    },
    {
        name: 'Apple clone',
        description:
            'Interactive dashboard for developers to track coding activity',
        image: projects4,
        link: 'https://apple-website-ten-beta.vercel.app/',
        website: true,
        commercial: false,
    },
    {
        name: 'Disney Clone',
        description: 'Fitness social network to connect athletes and trainers',
        image: projects5,
        link: 'https://disney-alpha.vercel.app/',
        website: true,
        commercial: false,
    },
    {
        name: 'News Aggregator',
        description: 'Aggregating latest news from top global newspapers.',
        image: projects6,
        link: 'https://github.com/Fedirrr/news-aggregator',
        website: false,
        commercial: false,
    },
];

export const ABOUT_CONTENT = {
    paragraphs: [
        'I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.',
        'I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.',
    ],
};
export const SKILLS_CONTENT = [
    {
        name: 'Front-End',
        stack: ['Javascript - 5 years', 'React - 5 years', 'Redux/Redux-Toolkit - 4.5 years', 'MobX - 4 years', 'TypeScript - 3 years', 'Next.js - 3 years', 'REST API - 5 years'],
    },

    {
        name: 'Libraries',
        stack: ['MUI', 'Ant Design', 'Tailwind CSS', 'Styled Components', 'GSAP', 'ThreeJS', 'Framer Motion', 'Axios', 'Lodash', 'Apollo GraphQL'],
    },
    {
        name: 'Testing',
        stack: ['Jest', 'Enzyme', 'React Testing Library'],
    },
    {
        name: 'Tolls',
        stack: ['WebStorm', 'VSCode', 'Docker', 'Postman', 'Jira', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'SonarQube', 'Postman']
    },
    {
        name: 'Methodology',
        stack: ['Scrum', 'Kanban/Waterfall']
    },
]

export const EXPERIENCES = [
    {
        yearRange: 'Feb 2023 — Jul 2024',
        title: 'Middle Pro React Frontend Engineer at Cleveroad',
        location: 'Remote, Lviv, Ukraine',
        description: [
            'Fully optimized the application for people with disabilities.',
            'Improved purchases by 10% due to the implementation of A/B testing.',
            'Improved the quality of the application by implementing unit tests.',
            'Developed advanced filtering components for ticket sales.'
        ],
    },
    {
        yearRange: 'Jan 2022 - Jan 2023',
        title: 'Middle React Frontend Engineer at Lohika.',
        location: 'Remote, Lviv, Ukraine',
        description: [
            'Integrating Segment analytics, which increased sales by 10%',
            'Improved user experience due to the implementation of A/B testing',
            'Integration Contentful into the app improved content updating by 2x.',
            'After that, content updating became possible without developer involvement.'
        ],
    },
    {
        yearRange: 'Jun 2020 — Dec 2021',
        title: 'Junior React Frontend Developer at Creative Solutions',
        location: 'Remote, Uzhhorod, Ukraine',
        description: [
            'Developed functionality for canvas editor to edit electrical drawings.',
            'Integrated real-time drawings changes with the server and processed using Al.',
            'Integrating segment analytics, which allowed to improve the application',
            'Adapted the application for several languages, developed a complex filter system, and improved page loading through caching and optimization'
        ],
    },
];

export const CONTACT_CONTENT = {
    headline: `LET'S WORK ON SOMETHING GREAT`,
    description:
        `I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.`,
    email: 'fedyapavlyshynets@gmail.com',
    socialLinks: [
        {
            platform: 'Twitter',
            url: 'https://x.com/pavlishynets',
            ariaLabel: 'Follow me on Twitter',
            icon: 'RiTwitterXFill',
        },
        {
            platform: 'GitHub',
            url: 'https://github.com/Fedirrr',
            ariaLabel: 'View my GitHub profile',
            icon: 'RiGithubFill',
        },
        {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/in/pvlshnts/',
            ariaLabel: 'Connect with me on LinkedIn',
            icon: 'RiLinkedinFill',
        },
    ],
    footerText: `© ${new Date().getFullYear()} Pavlyshynets Fedir. All rights reserved.`,
};
