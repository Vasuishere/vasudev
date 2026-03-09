import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import DriveImage from '@/components/ui/DriveImage';
import type { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const imageSrc = post.thumbnailUrl || post.thumbnail;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-surface rounded-xl border border-border overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-surface-alt overflow-hidden">
        <DriveImage
          src={imageSrc}
          alt={post.title}
          size="medium"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full bg-primary text-white">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>
        <h3 className="font-bold text-text mb-2 leading-snug line-clamp-2 font-heading">{post.title}</h3>
        <p className="text-sm text-text-light leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-2.5 transition-all">
          Read More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
