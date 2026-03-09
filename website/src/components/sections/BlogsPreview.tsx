import SectionHeading from '@/components/ui/SectionHeading';
import BlogCard from '@/components/ui/BlogCard';
import { getLatestBlogPosts } from '@/lib/data';

export default async function BlogsPreview() {
  const latestPosts = await getLatestBlogPosts(3);

  return (
    <section className="py-20 md:py-28 bg-surface-alt" aria-labelledby="blog-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="blog-preview-heading"
          label="From Our Blog"
          title="Industry Insights & Chemical News"
          description="Stay informed about chemical industry trends, export regulations, and product applications."
        />
        <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <div key={post.slug} role="listitem">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
