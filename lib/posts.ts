import matter from "gray-matter";

const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/Mountain-Dr3w/seams/main/posts";
const GITHUB_API_BASE =
  "https://api.github.com/repos/Mountain-Dr3w/seams/contents/posts";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  content: string;
}

function safeSlug(slug: string): string | null {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) return null;
  return slug;
}

async function fetchPostContent(slug: string): Promise<string | null> {
  const res = await fetch(`${GITHUB_RAW_BASE}/${slug}.mdx`, {
    next: { tags: ["posts"] },
  });
  if (!res.ok) return null;
  return res.text();
}

interface GitHubFileEntry {
  name: string;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const res = await fetch(GITHUB_API_BASE, {
    next: { tags: ["posts"] },
  });
  if (!res.ok) return [];

  const files = (await res.json()) as GitHubFileEntry[];
  const mdxFiles = files.filter((f) => f.name.endsWith(".mdx"));

  const posts: PostMeta[] = [];
  for (const file of mdxFiles) {
    const slug = file.name.replace(/\.mdx$/, "");
    const raw = await fetchPostContent(slug);
    if (!raw) continue;
    const { data } = matter(raw);
    posts.push({
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      tags: data.tags ?? [],
    });
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!safeSlug(slug)) return null;
  const raw = await fetchPostContent(slug);
  if (!raw) return null;
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    content,
  };
}
