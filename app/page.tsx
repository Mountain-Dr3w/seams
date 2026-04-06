import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.tags ?? []))
  ).sort();

  return (
    <div>
      <div className="mb-12">
        <h1 className="font-serif text-2xl sm:text-3xl font-light text-[var(--text-primary)] mb-3 italic">
          seams
        </h1>
        <p className="font-serif text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg">
          thoughts and case studies from a designer learning to build.
        </p>
      </div>

      {allTags.length > 0 && (
        <div className="flex gap-3 mb-8 flex-wrap">
          {allTags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] text-[var(--text-muted)] uppercase tracking-wide border border-[var(--border)] px-2 py-1 hover:border-[var(--border-active)] hover:text-[var(--text-secondary)] transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="font-serif text-sm text-[var(--text-muted)] italic">
          first post incoming_
        </p>
      ) : (
        <div className="space-y-0">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={`py-5 ${i < posts.length - 1 ? "border-b border-[var(--border)]" : ""}`}
            >
              <Link href={`/${post.slug}`} className="group block cursor-pointer">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h2 className="font-serif text-base text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <time className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                    {formatDate(post.date)}
                  </time>
                </div>
                {post.description && (
                  <p className="font-serif text-sm text-[var(--text-secondary)] leading-relaxed">
                    {post.description}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.65rem] text-[var(--text-muted)] uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
