export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export const workExperience: Experience[] = [
  {
    role: 'SWE',
    company: 'GEICO',
    location: 'Bellevue, Seattle (Remote)',
    period: 'Jan 2025 - Present',
    description: 'React · GoLang · Platform Engineering · Developer Productivity Engineering',
    technologies: ['React', 'GoLang', 'Platform Engineering'],
  },
  {
    role: 'Web Content Technician',
    company: 'Wisconsin Department of Corrections',
    location: 'Madison, WI (Remote)',
    period: 'Jun 2024 - Aug 2024',
    description: 'JavaScript · HTML · CSS · React.js · Web Developer Intern',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React.js'],
  },
  {
    role: 'Student Web Developer',
    company: 'UW-Milwaukee',
    location: 'Milwaukee, WI',
    period: 'Oct 2022 - Present',
    description:
      'I work as a student web developer at Marketing and Communications department of UWM, which is responsible for active maintenance of uwm.edu website. Wordpress · JavaScript · HTML · CSS · PHP · Node.js',
    technologies: ['Wordpress', 'JavaScript', 'HTML', 'CSS', 'PHP', 'Node.js'],
  },
  {
    role: 'Supplemental Instruction Leader',
    company: 'UW-Milwaukee',
    location: 'Milwaukee, WI',
    period: 'Sep 2023 - Dec 2023',
    description:
      'As a Supplemental Instruction Leader for COMPSCI250:Introductory Computer Programming (Java), I help undergrads master the basics of Java programming, navigate the complexities of exam preparation, and I often teach COMPSCI251: Intermediate Computer Programming (Java) too.',
    technologies: ['Java', 'Object Oriented Programming'],
  },
  {
    role: 'Senior React.js Developer',
    company: 'Accuknox Inc.',
    location: 'Chennai, India',
    period: 'Aug 2021 - Dec 2022',
    description:
      'Developed and maintained React-based web applications. Worked with various technologies including React, Redux, TypeScript, and modern web development tools.',
    technologies: ['React', 'Redux', 'TypeScript', 'JavaScript'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Zoho Corporation',
    location: 'Chennai, India',
    period: 'Dec 2021 - Aug 2021',
    description:
      'Worked with Zoho CRM\'s webforms to collate leads and contacts together to the CRM. Converted all forms across the site using PHP to collect user data and store into Zoho CRM.',
    technologies: ['PHP', 'Zoho CRM', 'JavaScript'],
  },
  {
    role: 'Graduate Engineer Trainee, Associate Technology L1',
    company: 'Publicis Sapient',
    location: 'Gurgaon, India',
    period: 'Jan 20, 2020 - March 5, 2021',
    description:
      'Worked on a commerce intelligence platform using Java, Spring Boot, Python, JavaScript, React.js, and Microsoft Azure. Developed microservices and e-commerce solutions.',
    technologies: ['Java', 'Spring Boot', 'Python', 'JavaScript', 'React.js', 'Azure'],
  },
  {
    role: 'Moderator',
    company: 'Sathybama Coding Club',
    location: 'Chennai, India',
    period: 'Sep 2018 - Sep 2019',
    description: 'HTML · CSS · JavaScript',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];
