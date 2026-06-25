import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Calendar, Clock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { usePosts, useCategories } from '../hooks/useWordPress';
import {
  getFeaturedImage, getFeaturedAlt, getCategories,
  stripHtml, formatDate, readingTime,
} from '../lib/wordpress';
import BrandArc from '../components/BrandArc';
import BrandWhoosh from '../components/BrandWhoosh';
import HeadingMarker from '../components/HeadingMarker';

function PostCardSkeleton() {
  return (
    <div style={{ borderRadius: '16px', background: '#FFFFFF', border: '1px solid #ECECF1', overflow: 'hidden' }}>
      <div style={{ height: '200px', background: 'linear-gradient(90deg, #F0F0F4 25%, #F7F7F8 50%, #F0F0F4 75%)', backgroundSize: '200% 100%', animation: 'skeleton-shimmer 1.4s infinite' }} />
      <div style={{ padding: '20px' }}>
        <div style={{ height: '12px', width: '60px', background: '#F0F0F4', borderRadius: '6px', marginBottom: '14px', animation: 'skeleton-shimmer 1.4s infinite' }} />
        <div style={{ height: '18px', background: '#F0F0F4', borderRadius: '6px', marginBottom: '8px', animation: 'skeleton-shimmer 1.4s infinite' }} />
        <div style={{ height: '18px', width: '75%', background: '#F0F0F4', borderRadius: '6px', marginBottom: '14px', animation: 'skeleton-shimmer 1.4s infinite' }} />
        <div style={{ height: '12px', background: '#F0F0F4', borderRadius: '6px', marginBottom: '6px', animation: 'skeleton-shimmer 1.4s infinite' }} />
        <div style={{ height: '12px', width: '80%', background: '#F0F0F4', borderRadius: '6px', animation: 'skeleton-shimmer 1.4s infinite' }} />
      </div>
    </div>
  );
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Blog() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [activeCat, setActiveCat] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  useSEO({
    title: 'Blog | Study Tips & Learning Science · Blast Learning',
    description: 'Study tips, learning science, and exam strategies from Blast Learning educators and AI researchers. Free resources for Indian students.',
  });

  const { categories } = useCategories();
  const { posts, totalPages, loading, error } = usePosts(page, activeCat, debouncedSearch);

  function handleSearch(value: string) {
    setSearch(value);
    clearTimeout((window as Window & { _searchTimer?: ReturnType<typeof setTimeout> })._searchTimer);
    (window as Window & { _searchTimer?: ReturnType<typeof setTimeout> })._searchTimer = setTimeout(() => {
      setDebouncedSearch(value);
      setPage(1);
    }, 380);
  }

  function handleCat(id: number | null) {
    setActiveCat(id);
    setPage(1);
  }

  return (
    <div style={{ background: '#FFFFFF' }}>
      <style>{`
        @keyframes skeleton-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(170deg, #E0F4FB 0%, #F5FBFF 40%, #FFFFFF 100%)', borderBottom: '1px solid #DAEEF6', paddingTop: '120px', paddingBottom: '72px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>
        <BrandWhoosh opacity={0.25} style={{ width: '480px', height: '480px', bottom: '-60px', right: '-60px' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <HeadingMarker text="Blast Learning Blog" fontSize="12px" />
            <h1 style={{ fontSize: 'var(--fs-h1-fluid)', fontWeight: 800, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '20px', color: '#111111' }}>
              Study Tips & Learning Science
            </h1>
            <p style={{ fontSize: 'var(--fs-body)', lineHeight: 1.7, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', maxWidth: '520px', margin: '0 auto 32px' }}>
              Exam strategies, retention science, and practical guides from our educators and AI researchers.
            </p>
            {/* Search */}
            <div style={{ position: 'relative', maxWidth: '480px', margin: '0 auto' }}>
              <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#8E8EA0', pointerEvents: 'none' }} />
              <input
                type="search"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: '100%', paddingLeft: '44px', paddingRight: '16px', paddingTop: '13px', paddingBottom: '13px', borderRadius: '10px', border: '1.5px solid #ECECF1', background: '#FFFFFF', fontSize: '14px', color: '#1C1C28', fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#0FA8DC'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#ECECF1'; }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      {categories.length > 0 && (
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #ECECF1', padding: '16px 24px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => handleCat(null)}
            style={{ padding: '7px 18px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer', border: activeCat === null ? 'none' : '1px solid #ECECF1', background: activeCat === null ? '#0FA8DC' : 'white', color: activeCat === null ? 'white' : '#5A5A6E', transition: 'all 0.15s' }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCat(cat.id)}
              style={{ padding: '7px 18px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer', border: activeCat === cat.id ? 'none' : '1px solid #ECECF1', background: activeCat === cat.id ? '#0FA8DC' : 'white', color: activeCat === cat.id ? 'white' : '#5A5A6E', transition: 'all 0.15s' }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Posts grid */}
      <section style={{ paddingTop: '56px', paddingBottom: '96px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          {error && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: '15px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>
                Could not load posts. Make sure the WordPress site is live and has CORS enabled.
              </p>
              <p style={{ fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>{error}</p>
            </div>
          )}

          {loading && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }} className="grid-cols-2-md grid-cols-3-lg">
              {[1, 2, 3, 4, 5, 6].map((i) => <PostCardSkeleton key={i} />)}
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: '15px', color: '#5A5A6E', fontFamily: 'Inter, sans-serif' }}>No posts found. Try a different search or category.</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <motion.div
              initial="hidden" animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}
              className="grid-cols-2-md grid-cols-3-lg"
            >
              {posts.map((post) => {
                const img = getFeaturedImage(post);
                const cats = getCategories(post);
                const mins = readingTime(post.content.rendered);
                return (
                  <motion.article
                    key={post.id}
                    variants={fadeUp}
                    whileHover={{
                      y: -6,
                      boxShadow: '0 16px 40px rgba(15, 23, 42, 0.10), 0 4px 12px rgba(15, 23, 42, 0.06)',
                      transition: { type: 'spring', stiffness: 300, damping: 22 },
                    }}
                    style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(28,28,40,0.04)' }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      style={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #ECECF1', overflow: 'hidden', textDecoration: 'none' }}
                    >
                      {img ? (
                        <img src={img} alt={getFeaturedAlt(post)} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} loading="lazy" />
                      ) : (
                        <div style={{ height: '200px', background: 'linear-gradient(135deg, #E0F5FC 0%, #F0EDFC 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '32px', opacity: 0.4 }}>📚</span>
                        </div>
                      )}
                      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        {cats.length > 0 && (
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                            {cats.slice(0, 2).map((c) => (
                              <span key={c.id} style={{ padding: '3px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, background: '#E0F5FC', color: '#0FA8DC', fontFamily: 'Inter, sans-serif' }}>
                                {c.name}
                              </span>
                            ))}
                          </div>
                        )}
                        <h2 style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', lineHeight: 1.35, marginBottom: '10px' }}
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', flex: 1, marginBottom: '16px' }}>
                          {stripHtml(post.excerpt.rendered).slice(0, 120)}…
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid #F3F4F6' }}>
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>
                              <Calendar size={11} /> {formatDate(post.date)}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>
                              <Clock size={11} /> {mins} min read
                            </span>
                          </div>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, color: '#0FA8DC', fontFamily: 'Inter, sans-serif' }}>
                            Read <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && !loading && !error && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '48px' }}>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{ padding: '9px 20px', borderRadius: '8px', border: '1.5px solid #ECECF1', background: 'white', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: page === 1 ? 'not-allowed' : 'pointer', color: page === 1 ? '#C8CDD6' : '#1C1C28' }}
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  style={{ width: '38px', height: '38px', borderRadius: '8px', border: p === page ? 'none' : '1.5px solid #ECECF1', background: p === page ? '#0FA8DC' : 'white', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer', color: p === page ? 'white' : '#5A5A6E' }}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{ padding: '9px 20px', borderRadius: '8px', border: '1.5px solid #ECECF1', background: 'white', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: page === totalPages ? 'not-allowed' : 'pointer', color: page === totalPages ? '#C8CDD6' : '#1C1C28' }}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
