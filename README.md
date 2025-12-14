# Akhil's Portfolio

A modern, minimalistic portfolio website built with Astro, React, and Tailwind CSS.

## Features

- **Light/Dark Mode**: Seamlessly switch between light and dark themes with persistent preference
- **Responsive Design**: Mobile-first design that works beautifully on all screen sizes
- **Smooth Animations**: CSS-based animations and transitions for a polished user experience
- **Fast Performance**: Built with Astro for optimal loading times and performance
- **Blog Integration**: Automatically fetches latest blog posts from Hashnode
- **Work Experience Timeline**: Interactive timeline showcasing professional experience
- **JSON API Endpoints**: Expose work experience and social links as JSON for external integrations

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3
- **Typography**: Open Sans font
- **Icons**: React Icons
- **Deployment**: Netlify

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BlogCard.tsx
│   │   ├── BlogSection.tsx
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── SocialLinks.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── WorkExperience.tsx
│   ├── data/
│   │   ├── work-experience.ts    # Single source of truth for work experience
│   │   └── social-links.ts       # Single source of truth for social links
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── api/
│   │   │   ├── work-experience.json.ts  # JSON API endpoint
│   │   │   └── social-links.json.ts     # JSON API endpoint
│   │   ├── index.astro
│   │   └── info.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saiyerniakhil/akhil-portfolio.git
   cd akhil-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## Available Commands

| Command            | Action                                           |
| :----------------- | :----------------------------------------------- |
| `npm install`      | Installs dependencies                            |
| `npm run dev`      | Starts local dev server at `localhost:4321`      |
| `npm run build`    | Build your production site to `./dist/`          |
| `npm run preview`  | Preview your build locally, before deploying     |
| `npm run astro`    | Run CLI commands like `astro add`, `astro check` |

## Deployment

This project is configured for deployment on Netlify. The build command is:

```bash
npm run build
```

The output directory is `dist/`.

## API Endpoints

This portfolio exposes JSON API endpoints that serve as a single source of truth for data:

### Work Experience
**GET** `/api/work-experience.json`

Returns an array of work experience entries with the following structure:
```json
[
  {
    "role": "SWE",
    "company": "GEICO",
    "location": "Bellevue, Seattle (Remote)",
    "period": "Jan 2025 - Present",
    "description": "React · GoLang · Platform Engineering",
    "technologies": ["React", "GoLang", "Platform Engineering"]
  }
]
```

### Social Links & Personal Info
**GET** `/api/social-links.json`

Returns personal information and social links:
```json
{
  "personalInfo": {
    "name": "Akhil",
    "fullName": "Sai Yerni Akhil Madabattula",
    "title": "Frontend Engineer",
    "bio": "Frontend Engineer who loves to build and tinker applications",
    "email": "saiyerniakhil@gmail.com",
    "website": "https://saiyerniakhil.in",
    "resumeUrl": "/resume.pdf"
  },
  "socialLinks": [...]
}
```

These endpoints are cached for 1 hour and can be consumed by external services, resume generators, or portfolio aggregators.

## Customization

### Updating Personal Information

All personal data is centralized in the `/src/data/` directory:

- **Work Experience**: Edit `src/data/work-experience.ts`
- **Social Links & Personal Info**: Edit `src/data/social-links.ts`
- **Blog Integration**: Update the Hashnode publication URL in `src/components/BlogSection.tsx`

The data files automatically update:
- All components that use the data
- The JSON API endpoints
- Ensuring consistency across the entire site

### Theme Colors

The primary color scheme uses green tones. To customize:
- Edit `tailwind.config.cjs` for theme colors
- Modify CSS variables in `src/styles/global.css`

## License

MIT License - feel free to use this as a template for your own portfolio!

## Contact

- **Website**: [saiyerniakhil.in](https://saiyerniakhil.in)
- **Blog**: [blog.saiyerniakhil.in](https://blog.saiyerniakhil.in)
- **GitHub**: [@saiyerniakhil](https://github.com/saiyerniakhil)
- **LinkedIn**: [Sai Yerni Akhil](https://linkedin.com/in/saiyerniakhil)
- **Twitter**: [@sai_yerni](https://twitter.com/sai_yerni)

---

Built with ♥ by Akhil
