import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags?: string[];
};

export type DiaryFrontmatter = {
  date: string;
  mood: string;
  moodLabel?: string;
  locked?: boolean;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

export type DiaryEntry = {
  slug: string;
  frontmatter: DiaryFrontmatter;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const DIARY_DIR = path.join(process.cwd(), "content", "diary");

// ─── Helpers ─────────────────────────────────────────────────

function readMdx(dir: string, slug: string) {
  const full = path.join(dir, `${slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  return matter(raw);
}

function slugsFrom(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// ─── Blog ────────────────────────────────────────────────────

export function getAllBlogPosts(): BlogPost[] {
  return slugsFrom(BLOG_DIR)
    .map((slug) => {
      const { data, content } = readMdx(BLOG_DIR, slug);
      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export function getBlogPost(slug: string): BlogPost {
  const { data, content } = readMdx(BLOG_DIR, slug);
  return { slug, frontmatter: data as BlogFrontmatter, content };
}

// ─── Diary ───────────────────────────────────────────────────

export function getAllDiaryEntries(): DiaryEntry[] {
  return slugsFrom(DIARY_DIR)
    .map((slug) => {
      const { data, content } = readMdx(DIARY_DIR, slug);
      return {
        slug,
        frontmatter: data as DiaryFrontmatter,
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export function getDiaryEntry(slug: string): DiaryEntry {
  const { data, content } = readMdx(DIARY_DIR, slug);
  return { slug, frontmatter: data as DiaryFrontmatter, content };
}

export function getBlogSlugs() {
  return slugsFrom(BLOG_DIR);
}
export function getDiarySlugs() {
  return slugsFrom(DIARY_DIR);
}
