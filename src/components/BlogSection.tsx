import { useState, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import BlogCard from './BlogCard';

interface BlogPost {
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  coverImage?: string;
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch blog posts from Hashnode
    fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            publication(host: "blog.saiyerniakhil.in") {
              posts(first: 5) {
                edges {
                  node {
                    title
                    brief
                    url
                    publishedAt
                    coverImage {
                      url
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data?.publication?.posts?.edges) {
          const blogPosts = data.data.publication.posts.edges.map((edge: any) => ({
            title: edge.node.title,
            brief: edge.node.brief,
            url: edge.node.url,
            publishedAt: edge.node.publishedAt,
            coverImage: edge.node.coverImage?.url,
          }));
          setPosts(blogPosts);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 rounded-lg border bg-card animate-pulse"
              >
                <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-muted rounded w-full mb-2"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
          <div className="p-6 rounded-lg border bg-card text-center text-muted-foreground">
            <p>{error}</p>
            <a
              href="https://blog.saiyerniakhil.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary-600 dark:text-primary-500 hover:underline"
            >
              Visit my blog directly
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
          <a
            href="https://blog.saiyerniakhil.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            View all posts
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.url} post={post} index={index} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="p-6 rounded-lg border bg-card text-center text-muted-foreground">
            <p>No blog posts found</p>
          </div>
        )}
      </div>
    </section>
  );
}
