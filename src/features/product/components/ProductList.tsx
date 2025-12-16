
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const workMindImg = new URL('../assets/AiCheck Logo (3).jpg', import.meta.url).href;

const products = [
  {
    id: 3,
    title: "Work Mind",
    description: "Automated attendance tracking using facial recognition technology.",
    image: workMindImg
  }
];

export default function ProductList() {
  return (
    <>
    <section style={{ padding: '6rem 0', backgroundColor: '#F8FAFC' }}>
      <style>{`
        .product-list-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .product-list-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .product-list-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'left', marginBottom: '4rem', paddingLeft: '1rem' }}>
            <h2 
              style={{ 
                fontSize: '44px',
                fontWeight: 700, 
                color: '#0f172a', 
                position: 'relative', 
                display: 'inline-block', 
                whiteSpace: 'nowrap', 
                lineHeight: 1.2,
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              Our Solutions
              <span 
                style={{ 
                  fontSize: '66px', 
                  fontWeight: 700, 
                  position: 'absolute', 
                  left: '30px', 
                  top: '-18px', 
                  transform: 'translateY(-20%)',
                  pointerEvents: 'none', 
                  whiteSpace: 'nowrap', 
                  lineHeight: 1,
                  zIndex: -1,
                  background: 'linear-gradient(to bottom, rgba(209, 213, 219, 1) 20%, rgba(209, 213, 219, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Our Solutions
              </span>
            </h2>
        </div>

        <div className="product-list-grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

function ProductCard({ product, index }: { product: any, index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: 'white',
                borderRadius: '2rem',
                padding: '12px',
                boxShadow: isHovered 
                    ? '0 25px 50px -12px rgba(30, 58, 138, 0.15)' 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                border: isHovered ? '1px solid #dbeafe' : '1px solid #f1f5f9',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
            }}
        >
            {/* Image Container */}
            <div style={{
                position: 'relative',
                height: '260px',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                backgroundColor: '#f1f5f9'
            }}>
                <img 
                    src={product.image} 
                    alt={product.title} 
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.7s ease'
                    }}
                />
                
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.4s ease'
                }} />
            </div>

            {/* Content */}
            <div style={{ padding: '24px 12px 12px' }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: isHovered ? '#2563eb' : '#1e293b',
                    marginBottom: '0.75rem',
                    transition: 'color 0.3s ease'
                }}>
                    {product.title}
                </h3>
                
                <p style={{
                    color: '#64748b',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {product.description}
                </p>
                
                <Link 
                    to={`/product/${product.id}`} 
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.925rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        backgroundColor: isHovered ? '#eff6ff' : '#f8fafc',
                        padding: '12px 24px',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                    }}
                >
                    Learn more
                    <ArrowRight 
                        size={16} 
                        color={isHovered ? '#2563eb' : '#64748b'}
                        style={{
                            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                            transition: 'transform 0.3s ease'
                        }}
                    />
                </Link>
            </div>
        </motion.div>
    );
}
