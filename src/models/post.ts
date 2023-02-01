export interface Post {
  title: string;
  url: string;
  pubDate: string;
  heroImage: string;
  excerpt: string;
}

export interface MarkdownPost {
  frontmatter: Exclude<Post, "url">;
  url: Post["url"];
}
