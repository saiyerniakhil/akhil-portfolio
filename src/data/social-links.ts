export interface SocialLink {
  name: string;
  url: string;
  username: string;
  type: 'github' | 'linkedin' | 'twitter' | 'email' | 'blog' | 'instagram';
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  bio: string;
  email: string;
  website: string;
  resumeUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Sai Yerni Akhil',
  fullName: 'Sai Yerni Akhil Madabattula',
  title: 'Software Developer',
  bio: 'Software Developer who loves to build and tinker applications',
  email: 'saiyerniakhil@gmail.com',
  website: 'https://saiyerniakhil.in',
  resumeUrl: '/resume.pdf',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/saiyerniakhil',
    username: '@saiyerniakhil',
    type: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sai-yerni-akhil-madabattula/',
    username: 'Sai Yerni Akhil',
    type: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/sai_yerni',
    username: '@sai_yerni',
    type: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:saiyerniakhil@gmail.com',
    username: 'saiyerniakhil@gmail.com',
    type: 'email',
  },
  {
    name: 'Blog',
    url: 'https://blog.saiyerniakhil.in',
    username: 'blog.saiyerniakhil.in',
    type: 'blog',
  },
];
