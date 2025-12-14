import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { workExperience, type Experience } from '../data/work-experience';

export default function WorkExperience() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 animate-fade-in">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-6 top-0 bottom-0 w-px bg-border"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 sm:pl-16 animate-slide-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-6px] sm:left-[18px] top-1 w-3 h-3 rounded-full bg-primary-600 dark:bg-primary-500 border-2 border-background"></div>

                {/* Content card */}
                <div className="group p-6 rounded-lg border bg-card hover:bg-accent transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
