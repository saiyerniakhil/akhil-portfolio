enum SkillType {
    Languages = "Languages",
    Frontend = "Frontend",
    Backend = "Backend",
    Tools = "Tools"
}

export interface Skill {
    type: SkillType
    values: string[]
}

export const skills: Skill[] = [
    {
        type: SkillType.Languages,
        values: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Java", "PHP", "Scala"]
    },
    {
        type: SkillType.Frontend,
        values: [
            "React.js", "Next.JS", "Redux", "Material UI", "TailwindCSS", "Astro.js", "Webpack", "Jest"
        ]
    },
    {
        type: SkillType.Backend,
        values: [
            "Go", "GraphQL", "REST API", "MongoDB", "Postgres", "SQLite", "Flask", "Docker", "Kubernetes"
        ]
    },
    {
        type: SkillType.Tools,
        values: [
            "Visual Studio Code", "Git", "Chrome Developer Tools", "Postman", "Figma", "Jira", "Microsoft Office Suite",
            "WordPress", "GitHub", "Agile (Scrum) Methodologies"
        ]
    }
]

