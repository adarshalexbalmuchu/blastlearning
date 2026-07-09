import DOMPurify from 'dompurify';

const WP_API = (import.meta.env.VITE_WP_API_URL as string | undefined) ?? 'https://blastlearning.in/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
    author?: Array<{ name: string; avatar_urls: Record<string, string> }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPFetchResult {
  posts: WPPost[];
  total: number;
  totalPages: number;
}

export function getFeaturedImage(post: WPPost): string | undefined {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
}

export function getFeaturedAlt(post: WPPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || stripHtml(post.title.rendered);
}

export function getCategories(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  return post._embedded?.['wp:term']?.[0] ?? [];
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.['author']?.[0]?.name ?? 'Blast Learning';
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim();
}

/**
 * Sanitizes HTML sourced from the WordPress CMS before it is injected via
 * dangerouslySetInnerHTML, to prevent stored XSS if a post/author account
 * or the CMS itself is ever compromised.
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'b', 'i', 'u', 's', 'a', 'ul', 'ol', 'li',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'code',
      'img', 'figure', 'figcaption', 'hr', 'span', 'div', 'table', 'thead',
      'tbody', 'tr', 'th', 'td',
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'target', 'rel', 'width', 'height'],
    ALLOW_DATA_ATTR: false,
  });
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(dateString));
}

export function readingTime(html: string): number {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

async function wpFetch<T>(path: string, params: Record<string, string> = {}): Promise<{ data: T; headers: Headers }> {
  const url = new URL(`${WP_API}${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`WordPress API ${res.status}: ${res.statusText}`);
  const data: T = await res.json();
  return { data, headers: res.headers };
}

export async function fetchPosts(options: {
  page?: number;
  perPage?: number;
  categoryId?: number;
  search?: string;
} = {}): Promise<WPFetchResult> {
  const params: Record<string, string> = {
    _embed: '1',
    per_page: String(options.perPage ?? 9),
    page: String(options.page ?? 1),
  };
  if (options.categoryId) params.categories = String(options.categoryId);
  if (options.search) params.search = options.search;

  const { data, headers } = await wpFetch<WPPost[]>('/posts', params);
  return {
    posts: data,
    total: Number(headers.get('X-WP-Total') ?? 0),
    totalPages: Number(headers.get('X-WP-TotalPages') ?? 1),
  };
}

export async function fetchPost(slug: string): Promise<WPPost> {
  const { data } = await wpFetch<WPPost[]>('/posts', { slug, _embed: '1' });
  if (!data.length) throw new Error('Post not found');
  return data[0];
}

export async function fetchCategories(): Promise<WPCategory[]> {
  const { data } = await wpFetch<WPCategory[]>('/categories', { per_page: '50', hide_empty: 'true' });
  return data;
}
