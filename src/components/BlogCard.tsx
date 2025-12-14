import { FiArrowRight, FiCalendar } from 'react-icons/fi';

interface BlogPost {
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  coverImage?: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg border bg-card hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-slide-up"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
          {post.brief}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <FiCalendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center gap-1 text-primary-600 dark:text-primary-500 font-medium group-hover:gap-2 transition-all">
            <span>Read more</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
}
