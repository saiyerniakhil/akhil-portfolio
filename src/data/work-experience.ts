export interface Experience {
    role: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    technologies: string[];
}

export const workExperience: Experience[] = [
    {
        role: 'Software Developer',
        company: 'GEICO Insurance',
        location: 'Seattle, WA',
        period: 'Jan 2025 - Present',
        description: [
            'Contributed key features to the Internal Developer Platform using Go, GraphQL, and React.',
            'Developed and deployed a cross-platform CLI tool for creating WSL and Docker-based workspaces to 5,600 developers across GEICO.',
        ],
        technologies: ['Go', 'GraphQL', 'React', 'WSL', 'Docker', 'Platform Engineering'],
    },
    {
        role: 'Graduate Teaching Assistant',
        company: 'University of Wisconsin - Milwaukee',
        location: 'Milwaukee, WI',
        period: 'Aug 2024 - Jan 2025',
        description: [
            'Assisted in teaching advanced computer science courses including Data Structures and Algorithms, Programming Language Concepts, Operating Systems, and Computational Models.',
            'Developed assignments, mentored 30+ students, and facilitated lab sessions.',
        ],
        technologies: ['Java', 'C++', 'JavaScript', 'Prolog', 'SML', 'Teaching'],
    },
    {
        role: 'Web Content Intern',
        company: 'Wisconsin Department of Corrections',
        location: 'Madison, WI',
        period: 'Jul 2024 - Aug 2024',
        description: [
            'Developed a user-friendly and responsive intranet platform that reduced operational costs by 45%.',
            'Applied UX design best practices and created comprehensive documentation for SharePoint framework solutions.',
        ],
        technologies: ['SharePoint', 'JavaScript', 'Figma', 'UX Design', 'Fluent UI'],
    },
    {
        role: 'Software Developer',
        company: 'Division of Marketing and Communications, UWM',
        location: 'Milwaukee, WI',
        period: 'Feb 2023 - Jul 2024',
        description: [
            'Automated DDoS reporting for WordPress multisite deployment using AWS CloudWatch and Lambda.',
            'Conducted SEO optimization on 600+ websites improving performance by 15% and reducing load times by 20%.',
            'Built secure SPA with React integrating Microsoft Active Directory.',
        ],
        technologies: ['WordPress', 'AWS EC2', 'AWS CloudWatch', 'AWS Lambda', 'AWS Amplify', 'React', 'Shibboleth SAML', 'SEO'],
    },
    {
        role: 'Senior React.js Developer',
        company: 'AccuKnox Inc.',
        location: 'Chennai, India',
        period: 'Aug 2021 - Feb 2023',
        description: [
            'Developed and designed a responsive Multi-tenant and Multi-Workspace Cloud Workload Protection Platform.',
            'Led a 7-member front-end team, reduced frontend bug reports by 40%.',
            'Migrated application from ChakraUI to MaterialUI improving performance by 40% and decreasing bounce rate by 30%.',
        ],
        technologies: ['React.js', 'TypeScript', 'Redux', 'Material UI', 'SASS', 'Google Cloud Storage', 'GCP Load Balancer', 'Kubernetes', 'Github Actions', 'Cypress', 'Jest'],
    },
    {
        role: 'Software Developer',
        company: 'Tyutee',
        location: 'Bengaluru, India',
        period: 'Apr 2021 - Jul 2021',
        description: [
            'Developed landing pages using Angular.js and integrated with Zoho CRM to streamline user registration, increasing conversion rates by 40%.',
            'Built product checkout pages with Razorpay payment gateway integration.',
            'Added Google Calendar integration to Django SaaS application.',
        ],
        technologies: ['Angular.js', 'Zoho CRM', 'Razorpay', 'Django', 'Google Calendar API', 'Python'],
    },
    {
        role: 'Associate Technology L1',
        company: 'Publicis Sapient',
        location: 'Gurugram, India',
        period: 'Jan 2020 - Mar 2021',
        description: [
            'Implemented comprehensive front-end testing maintaining 97% code coverage.',
            'Designed and developed Java Spring Boot microservice integrated with Apache Airflow for product onboarding automation.',
            'Deployed Puppeteer-based web scraping application and achieved 40% cost savings on Google DataProc ETL jobs.',
        ],
        technologies: ['Cypress', 'Enzyme', 'Jest', 'Java', 'Spring Boot', 'Apache Airflow', 'Puppeteer', 'JavaScript', 'Google Cloud Compute Engine', 'NGINX', 'Google DataProc'],
    },
];