import type { MarkdownPost, Post } from "../models/post";

const LAST_POST_LIMIT = 10;
export const POST_PER_PAGE = 2;

export function getPosts(posts: Record<string, any>): Post[] {
  return posts.map(mapMarkdownPost);
}

export function getLastPosts(posts: Record<string, any>): Post[] {
  return posts.slice(0, LAST_POST_LIMIT).map(mapMarkdownPost);
}

function mapMarkdownPost(post: MarkdownPost) {
  const {
    title,

    heroImage,
    pubDate,

    excerpt,
  } = post.frontmatter;
  return {
    title,
    heroImage,
    pubDate,
    excerpt,
    url: post.url,
  };
}
