import projects1 from '../assets/wwe.webp';
import projects2 from '../assets/studyUk.webp';
import projects3 from '../assets/archewlo2.webp';

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
    resumeLinkText: 'Check Resume',
    resumeLink: 'https://drive.google.com/file/d/1Pc43C64-oJiEez3x-5MOb69db3FCOmgL/view?usp=drive_link',
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
];

export const ABOUT_CONTENT = {
    paragraphs: [
        'I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.',
        'I specialize in using technologies like React, TypeScript, Next.js, Redux/Redux-Toolkit, Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.',
    ],
};
export const SKILLS_CONTENT = [
    {
        name: 'Front-End',
        items: ['Javascript - 5 years', 'React - 5 years', 'Redux/Redux-Toolkit - 4.5 years', 'MobX - 4 years', 'TypeScript - 3 years', 'Next.js - 3 years', 'REST API - 5 years'],
        summary: false,
    },

    {
        name: 'Libraries',
        items: ['MUI', 'Ant Design', 'Tailwind CSS', 'Styled Components', 'GSAP', 'ThreeJS', 'Framer Motion', 'Axios', 'Lodash', 'Apollo GraphQL'],
        summary: false,
    },
    {
        name: 'Testing',
        items: ['Jest', 'Enzyme', 'React Testing Library'],
        summary: false,
    },
    {
        name: 'Tolls',
        items: ['WebStorm', 'VSCode', 'Docker', 'Postman', 'Jira', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'SonarQube', 'Postman'],
        summary: false
    },
    {
        name: 'Methodology',
        items: ['Scrum', 'Kanban/Waterfall'],
        summary: false
    },
]

export const EXPERIENCES = [
    {
        name: 'Feb 2023 — Jul 2024',
        job: 'Middle Pro React Frontend Engineer at Cleveroad',
        location: 'Remote, Lviv, Ukraine',
        items: [
            'Fully optimized the application for people with disabilities.',
            'Improved purchases by 10% due to the implementation of A/B testing.',
            'Improved the quality of the application by implementing unit tests.',
            'Developed advanced filtering components for ticket sales.'
        ],
        summary: ['Code Review and Quality Assurance', 'Task delegation and estimation', 'Communication with the customer and solving various\n' +
        'business ideas.', 'Collaborated with cross-functional teams, including\n' +
        'product managers and QA engineers, to deliver\n' +
        'projects within deadlines', 'Lighthouse improvements']
    },
    {
        name: 'Jan 2022 - Jan 2023',
        job: 'Middle React Frontend Engineer at Lohika.',
        location: 'Remote, Lviv, Ukraine',
        items: [
            'Integrating Segment analytics, which increased sales by 10%',
            'Improved user experience due to the implementation of A/B testing',
            'Integration Contentful into the app improved content updating by 2x.',
            'After that, content updating became possible without developer involvement.'
        ],
        summary: ['Code review', 'Task delegation & decomposition', 'Build CI/CD pipeline', 'Communication with SEO team', 'Experience in project management from scratch.']
    },
    {
        name: 'Mar 2020 — Dec 2021',
        job: 'Junior React Frontend Developer at SyncMobile',
        location: 'Remote, Uzhhorod, Ukraine',
        items: [
            'Developed functionality for canvas editor to edit electrical drawings.',
            'Integrated real-time drawings changes with the server and processed using Al.',
            'Integrating segment analytics, which allowed to improve the application',
            'Adapted the application for several languages, developed a complex filter system, and improved page loading through caching and optimization'
        ],
        summary: ['Learning CI/CD pipelines and assisting in their setup', 'Working with version control systems (Git)', 'Participating in the code review process to improve code quality', 'Writing and maintaining unit tests for components']
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
