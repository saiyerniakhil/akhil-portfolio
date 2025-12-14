import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi';
import { socialLinks, personalInfo } from '../data/social-links';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  email: FiMail,
  blog: FiMail, // Using mail icon as fallback
  instagram: FiMail, // Using mail icon as fallback
};

export default function SocialLinks() {
  const displayLinks = socialLinks.filter(link => link.type !== 'blog');

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">Connect with me</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayLinks.map((link) => {
            const Icon = iconMap[link.type] || FiMail;
            const isEmail = link.type === 'email';

            return (
              <a
                key={link.type}
                href={link.url}
                {...(!isEmail && { target: '_blank', rel: 'noopener noreferrer' })}
                className="group flex items-center gap-4 p-6 rounded-lg border bg-card hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Icon className="w-6 h-6 text-primary-700 dark:text-primary-400" />
                </div>
                <div>
                  <p className="font-semibold">{link.name}</p>
                  <p className="text-sm text-muted-foreground">{link.username}</p>
                </div>
              </a>
            );
          })}

          <a
            href={personalInfo.resumeUrl}
            download
            className="group flex items-center gap-4 p-6 rounded-lg border bg-primary-600 dark:bg-primary-700 text-white hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="p-3 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
              <FiDownload className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">Resume</p>
              <p className="text-sm opacity-90">Download PDF</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
