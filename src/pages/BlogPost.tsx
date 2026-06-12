import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { usePost } from '../hooks/useWordPress';
import {
  getFeaturedImage, getFeaturedAlt, getCategories, getAuthorName,
  stripHtml, formatDate, readingTime,
} from '../lib/wordpress';
import BrandArc from '../components/BrandArc';

function PostSkeleton() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>
      {[100, 70, 90, 100, 60, 85, 100, 75].map((w, i) => (
        <div key={i} style={{ height: i < 2 ? '28px' : '16px', width: `${w}%`, background: 'linear-gradient(90deg, #F0F0F4 25%, #F7F7F8 50%, #F0F0F4 75%)', backgroundSize: '200% 100%', borderRadius: '6px', marginBottom: i < 2 ? '16px' : '10px', animation: 'skeleton-shimmer 1.4s infinite' }} />
      ))}
    </div>
  );
}

export default function BlogPost() {
  const { slug = '' } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { post, loading, error } = usePost(slug);

  useSEO({
    title: post ? `${stripHtml(post.title.rendered)} · Blast Learning Blog` : 'Blog · Blast Learning',
    description: post ? stripHtml(post.excerpt.rendered).slice(0, 155) : '',
  });

  const featuredImg = post ? getFeaturedImage(post) : undefined;
  const cats = post ? getCategories(post) : [];
  const author = post ? getAuthorName(post) : '';
  const mins = post ? readingTime(post.content.rendered) : 0;

  return (
    <div style={{ background: '#FFFFFF' }}>
      <style>{`
        @keyframes skeleton-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .wp-content h2 { font-size: 1.5rem; font-weight: 700; font-family: 'Poppins', sans-serif; color: #1C1C28; margin: 2rem 0 1rem; letter-spacing: -0.015em; }
        .wp-content h3 { font-size: 1.2rem; font-weight: 700; font-family: 'Poppins', sans-serif; color: #1C1C28; margin: 1.75rem 0 0.75rem; }
        .wp-content h4 { font-size: 1.05rem; font-weight: 600; font-family: 'Poppins', sans-serif; color: #1C1C28; margin: 1.5rem 0 0.5rem; }
        .wp-content p { font-size: 1.0625rem; line-height: 1.8; color: #3D3D52; font-family: 'Inter', sans-serif; margin-bottom: 1.25rem; }
        .wp-content a { color: #0FA8DC; text-decoration: underline; text-underline-offset: 3px; }
        .wp-content a:hover { color: #0D8BB5; }
        .wp-content ul, .wp-content ol { margin: 1rem 0 1.25rem 1.5rem; }
        .wp-content li { font-size: 1.0625rem; line-height: 1.75; color: #3D3D52; font-family: 'Inter', sans-serif; margin-bottom: 0.4rem; }
        .wp-content blockquote { border-left: 3px solid #0FA8DC; margin: 1.5rem 0; padding: 12px 20px; background: #E0F5FC20; border-radius: 0 8px 8px 0; }
        .wp-content blockquote p { color: #5A5A6E; font-style: italic; margin-bottom: 0; }
        .wp-content img { width: 100%; height: auto; border-radius: 12px; margin: 1.5rem 0; display: block; }
        .wp-content pre { background: #F7F7F8; border: 1px solid #ECECF1; border-radius: 10px; padding: 16px 20px; overflow-x: auto; margin: 1.25rem 0; }
        .wp-content code { font-family: 'Menlo', 'Monaco', monospace; font-size: 0.875rem; color: #F03C6F; background: #FFF0F4; padding: 2px 6px; border-radius: 4px; }
        .wp-content pre code { background: none; color: #3D3D52; padding: 0; }
        .wp-content strong { font-weight: 700; color: #1C1C28; }
        .wp-content hr { border: none; border-top: 1px solid #ECECF1; margin: 2rem 0; }
      `}</style>

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#FFFFFF', borderBottom: '1px solid #ECECF1', paddingTop: '120px', paddingBottom: '56px' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-160px', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(15,168,220,0.07) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 14s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-120px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', willChange: 'transform', animation: 'blob-float 18s ease-in-out infinite reverse' }} />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', pointerEvents: 'none' }}>
          <BrandArc width="100%" opacity={0.04} />
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <button
            onClick={() => navigate('/blog')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 20px', marginBottom: '4px' }}
          >
            <ArrowLeft size={14} /> Back to Blog
          </button>

          {loading && (
            <div>
              <div style={{ height: '40px', width: '80%', background: '#F0F0F4', borderRadius: '8px', marginBottom: '16px', animation: 'skeleton-shimmer 1.4s infinite' }} />
              <div style={{ height: '40px', width: '60%', background: '#F0F0F4', borderRadius: '8px', marginBottom: '24px', animation: 'skeleton-shimmer 1.4s infinite' }} />
              <div style={{ height: '14px', width: '200px', background: '#F0F0F4', borderRadius: '6px', animation: 'skeleton-shimmer 1.4s infinite' }} />
            </div>
          )}

          {error && (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <p style={{ color: '#5A5A6E', fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>Post not found or could not be loaded.</p>
              <Link to="/blog" style={{ color: '#0FA8DC', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>← Back to Blog</Link>
            </div>
          )}

          {post && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {cats.length > 0 && (
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {cats.map((c) => (
                    <span key={c.id} style={{ padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, background: '#E0F5FC', color: '#0FA8DC', fontFamily: 'Inter, sans-serif' }}>
                      {c.name}
                    </span>
                  ))}
                </div>
              )}
              <h1
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#1C1C28', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '20px' }}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>
                  <User size={13} /> {author}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>
                  <Calendar size={13} /> {formatDate(post.date)}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#8E8EA0', fontFamily: 'Inter, sans-serif' }}>
                  <Clock size={13} /> {mins} min read
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured image */}
      {featuredImg && (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px 0' }}>
          <img src={featuredImg} alt={post ? getFeaturedAlt(post) : ''} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '16px', display: 'block' }} />
        </div>
      )}

      {/* Content */}
      {post && (
        <motion.article
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
          style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 96px' }}
        >
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Bottom nav */}
          <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid #ECECF1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: '#5A5A6E', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
              <ArrowLeft size={15} /> All Posts
            </Link>
            <Link
              to="/programs"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 22px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none', background: '#0FA8DC', color: 'white', boxShadow: '0 4px 14px rgba(15,168,220,0.28)' }}
            >
              Start Free Trial
            </Link>
          </div>
        </motion.article>
      )}

      {loading && (
        <div style={{ paddingTop: '48px', paddingBottom: '96px' }}>
          <PostSkeleton />
        </div>
      )}
    </div>
  );
}
