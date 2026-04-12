@AGENTS.md

# Seams

Design blog — "the space between designing it and building it." A content site for writing about the Velveteen project and design thinking.

## Stack

- Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- MDX for content (via `next-mdx-remote` + `gray-matter`)
- Fonts: Lora (serif, body/headings) + Geist Mono (monospace, UI elements)
- No database, no auth, no API routes — static content only

## Architecture

- Pages in `app/` (App Router file-based routing, no `src/` directory)
- Blog posts as MDX files, loaded via `lib/posts.ts`
- Dynamic routes: `app/[slug]/page.tsx` for individual posts
- CSS custom properties for theming (`--bg`, `--text-primary`, `--text-secondary`, `--text-muted`, `--border`, `--accent`)

## Design Language

- Warm, editorial aesthetic — serif headings, generous whitespace
- Dark background with muted text hierarchy via opacity
- Tags displayed as uppercase monospace labels
- Pixel-art rabbit mark (SVG) as brand element
- Links to velveteen.sh in nav
- Desktop-first, mobile-responsive

## Content

- Posts have frontmatter: `title`, `date`, `description`, `tags`
- Homepage lists all posts sorted by date with tag filtering
- `logo-preview/` route for previewing the brand mark
