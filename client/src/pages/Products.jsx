import { useState, useEffect } from 'react';
import axios from 'axios';
import { Battery, Settings, Zap, Filter, Search, Info } from 'lucide-react';
import ClayCard from '../components/ClayCard';
import SEO from '../components/SEO';
import './Products.css';

// Product Assets
import q70l from '../assets/Products/Solo 9 plates.jpeg';
import ma115 from '../assets/Products/Solo 11 plates.jpeg';
import super4 from '../assets/Products/Solo 18 plates.jpeg';
import solar60 from '../assets/Products/Solo Solar 60.jpeg';
import plate2hn from '../assets/Products/2HN plate.jpeg';
import plateStandard from '../assets/Products/Standard plate.jpeg';

const localProducts = [
  { _id: '1', name: 'SOLO Q-70L Plus', category: 'Car Battery', description: 'Premium 9-plate automotive battery for superior cranking power.', image: q70l },
  { _id: '2', name: 'SOLO MA-115', category: 'Car Battery', description: 'Robust 11-plate battery for cars and UPS backup.', image: ma115 },
  { _id: '3', name: 'SOLO 12V Super 4', category: 'Motorcycle Battery', description: 'High-density 18-plate battery for specialized performance.', image: super4 },
  { _id: '4', name: 'SOLO Solar 60', category: 'Solar Battery', description: 'Reliable 5-plate storage for home solar energy units.', image: solar60 },
  { _id: '5', name: 'SOLO Battery Plate (2HN)', category: 'Battery Plates', description: 'High-precision 2HN negative lead plates from our factory.', image: plate2hn },
  { _id: '6', name: 'SOLO Standard Plate', category: 'Battery Plates', description: 'Industry standard lead-acid plates for general use.', image: plateStandard },
];

const Products = () => {
  const [products, setProducts] = useState(localProducts);
  const [filteredProducts, setFilteredProducts] = useState(localProducts);
  const [loading, setLoading] = useState(false); // No longer blocks UI
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Motorcycle Battery', 'Car Battery', 'Solar Battery', 'Battery Plates'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        let data = res.data;
        if (data && data.length > 0) {
          const mappedData = data.map(p => ({
            ...p,
            image: p.image === 'Solo 9 plates.jpeg' ? q70l : 
                   p.image === 'Solo 11 plates.jpeg' ? ma115 : 
                   p.image === 'Solo 18 plates.jpeg' ? super4 : 
                   p.image === 'Solo Solar 60.jpeg' ? solar60 : 
                   p.image === '2HN plate.jpeg' ? plate2hn : 
                   p.image === 'Standard plate.jpeg' ? plateStandard : p.image
          }));
          setProducts(mappedData);
          setFilteredProducts(mappedData);
        }
      } catch (err) {
        console.warn('Background sync failed, using reliable local catalog.');
      }
    };
    fetchProducts();
  }, []);




  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === activeCategory));
    }
    
    // Trigger reveal animations
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
  }, [activeCategory, products]);

  const getProductIcon = (category) => {
    if (category?.includes('Battery')) return <Battery size={32} />;
    if (category === 'Sprockets') return <Settings size={32} />;
    return <Zap size={32} />;
  };

  if (loading) return <div className="container section text-center"><div className="loader clay-inset">Loading SOLO Range...</div></div>;

  return (
    <div className="products-page">
      <SEO 
        title="SOLO Batteries & Battery Plates | Products" 
        description="Explore our SOLO range of motorcycle batteries, car batteries, solar batteries, and high-precision battery plates like 2HN and Super 4."
      />
      <section className="products-hero section animate-slide-up">
        <div className="container text-center">
          <h1 className="clay-inset display-4 mb-3">OUR SOLO RANGE</h1>
          <p className="subtitle">Premium Pakistani Engineering & Reliable Energy Solutions</p>
        </div>
      </section>

      <section className="filter-section section pt-0 reveal reveal-up">
        <div className="container">
          <div className="filter-tabs-container clay-inset">
            <div className="filter-label"><Filter size={18} /> Filter By:</div>
            <div className="filter-tabs">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product-list section pt-0">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="empty-state clay-card text-center reveal">
               <Search size={48} className="mb-3 opacity-50" />
               <h3>No products found in this category.</h3>
               <p>Please check back later or contact us for custom orders.</p>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product, index) => (
                <ClayCard 
                  key={product._id} 
                  className="product-card reveal reveal-up clickable" 
                  style={{transitionDelay: `${(index % 3) * 0.15}s`}}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="product-visual clay-inset flex-center">
                    <img src={product.image} alt={product.name} className="product-preview-img" />
                    <span className="visual-hint">CLICK TO ZOOM</span>
                  </div>
                  
                  <div className="product-info">
                    <div className="product-header">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-badge clay-card">{product.category}</div>
                    </div>
                    
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-action-box">
                      <div className="price-tag">
                        <Info size={14} /> <span>Inquiry Only</span>
                      </div>
                    </div>
                  </div>
                </ClayCard>

              ))}
            </div>
          )}
          
          <div className="pricing-disclaimer clay-card mt-5 reveal">
              <p><strong>Raw Material Notice:</strong> Due to fluctuating lead and steel prices, please contact our sales point for updated commercial quotations.</p>
          </div>
        </div>
      </section>

      {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>

  );
};

// Modal Detail View
const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal-content clay-card animate-zoom-in" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn clay-button" onClick={onClose}>&times;</button>
        
        <div className="modal-inner">
          <div className="modal-visual clay-inset">
             <img src={product.image} alt={product.name} className="modal-main-img" />
          </div>
          
          <div className="modal-details">
             <div className="badge-line mb-3">
               <span className="product-badge clay-card">{product.category}</span>
             </div>
             <h2 className="display-5 mb-4">{product.name}</h2>
             
             <div className="detail-section mb-5">
               <h4>PRODUCT DESCRIPTION</h4>
               <p className="lead">{product.description}</p>
             </div>

             <div className="detail-features clay-inset p-4 mb-5">
                <div className="feature-item">
                   <Zap className="color-red" size={20} />
                   <span>High performance guaranteed by Crown Accumulator</span>
                </div>
                <div className="feature-item">
                   <Settings className="color-red" size={20} />
                   <span>Specialized plate engineering (since 1984)</span>
                </div>
             </div>

             <div className="modal-actions">
               <button className="clay-button primary w-100 py-3" onClick={() => window.location.href='/contact'}>
                 Request Commercial Quotation
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Products;

