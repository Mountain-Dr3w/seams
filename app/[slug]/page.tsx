import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — dispatch`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <div className="mb-10">
        <Link
          href="/"
          className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors mb-6 block"
        >
          ← all dispatches
        </Link>
        <h1 className="font-mono text-2xl sm:text-3xl font-light text-[var(--text-primary)] mb-3">
          {post.title}
        </h1>
        <div className="flex items-center gap-4">
          <time className="font-mono text-xs text-[var(--text-muted)]">
            {formatDate(post.date)}
          </time>
          {post.tags && post.tags.length > 0 && (
            <>
              <span className="text-[var(--border-active)]">·</span>
              <div className="flex gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.65rem] text-[var(--text-muted)] uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="prose max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
