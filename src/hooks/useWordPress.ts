
import { useState, useEffect } from 'react';
import {
  fetchPosts, fetchPost, fetchCategories,
  type WPPost, type WPCategory,
} from '../lib/wordpress';

export function usePosts(page: number, categoryId: number | null, search: string) {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchPosts({ page, categoryId: categoryId ?? undefined, search })
      .then(({ posts, total, totalPages }) => {
        if (!cancelled) { setPosts(posts); setTotal(total); setTotalPages(totalPages); }
      })
      .catch((e: Error) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [page, categoryId, search]);

  return { posts, total, totalPages, loading, error };
}

export function usePost(slug: string) {
  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    setPost(null);
    fetchPost(slug)
      .then((p) => { if (!cancelled) setPost(p); })
      .catch((e: Error) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [slug]);

  return { post, loading, error };
}

export function useCategories() {
  const [categories, setCategories] = useState<WPCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(() => { /* categories are non-critical */ })
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}
