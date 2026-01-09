import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const [imageError, setImageError] = useState(false);

    if (!product) {
        return (
            <div className="product-detail">
                <div className="container">
                    <div className="product-detail__not-found">
                        <h1>Product Not Found</h1>
                        <p>The product you're looking for doesn't exist.</p>
                        <Link to="/products" className="btn btn-primary">
                            View All Products
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const { name, subtitle, category, description, benefits, ageGroup, keyIngredients, image } = product;

    // Get related products (same category, excluding current)
    const relatedProducts = products
        .filter(p => p.category === category && p.id !== id)
        .slice(0, 3);

    const getCategoryLabel = (cat) => {
        const labels = {
            'skin-care': 'Skin Care',
            'hair-care': 'Hair Care',
            'baby-care': 'Baby Care',
            'antifungal-care': 'Antifungal Care'
        };
        return labels[cat] || cat;
    };

    return (
        <div className="product-detail">
            {/* Breadcrumb */}
            <div className="product-detail__breadcrumb">
                <div className="container">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/products">Products</Link>
                    <span>/</span>
                    <span className="current">{name}</span>
                </div>
            </div>

            {/* Product Main */}
            <section className="product-detail__main section">
                <div className="container">
                    <div className="product-detail__content">
                        {/* Product Image */}
                        <div className="product-detail__image-wrapper">
                            <div className="product-detail__image">
                                {image && !imageError ? (
                                    <img
                                        src={image}
                                        alt={name}
                                        className="product-detail__img"
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <div className="product-detail__placeholder">
                                        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                                            <path d="M60 20C60 20 35 35 35 65C35 78.807 46.193 90 60 90C73.807 90 85 78.807 85 65C85 35 60 20 60 20Z" fill="currentColor" opacity="0.15" />
                                            <path d="M60 28C60 28 40 40 40 65C40 76.046 48.954 85 60 85C71.046 85 80 76.046 80 65C80 40 60 28 60 28Z" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <span className="product-detail__category">{getCategoryLabel(category)}</span>
                        </div>

                        {/* Product Info */}
                        <div className="product-detail__info">
                            <h1 className="product-detail__name">{name}</h1>
                            {subtitle && <p className="product-detail__subtitle">{subtitle}</p>}

                            <p className="product-detail__description">{description}</p>

                            {/* Age Group */}
                            <div className="product-detail__age">
                                <span className="product-detail__age-label">Suitable For:</span>
                                <span className="product-detail__age-value">{ageGroup}</span>
                            </div>

                            {/* Key Ingredients */}
                            {keyIngredients && keyIngredients.length > 0 && (
                                <div className="product-detail__ingredients">
                                    <h3>Key Ingredients</h3>
                                    <div className="product-detail__ingredients-list">
                                        {keyIngredients.map((ingredient, index) => (
                                            <span key={index} className="product-detail__ingredient">
                                                {ingredient}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Benefits */}
                            {benefits && benefits.length > 0 && (
                                <div className="product-detail__benefits">
                                    <h3>Uses & Benefits</h3>
                                    <ul className="product-detail__benefits-list">
                                        {benefits.map((benefit, index) => (
                                            <li key={index}>
                                                <span className="product-detail__benefit-icon">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="product-detail__cta">
                                <Link to="/contact" className="btn btn-gold btn-lg">
                                    Enquire About This Product
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="product-detail__related section bg-beige">
                    <div className="container">
                        <div className="section-header">
                            <span className="subheading">You May Also Like</span>
                            <h2 className="heading-2">Related Products</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="product-detail__related-grid">
                            {relatedProducts.map((relProduct) => (
                                <Link
                                    key={relProduct.id}
                                    to={`/products/${relProduct.id}`}
                                    className="product-detail__related-card card"
                                >
                                    <div className="product-detail__related-image">
                                        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                                            <path d="M40 15C40 15 25 25 25 42C25 50.284 31.716 57 40 57C48.284 57 55 50.284 55 42C55 25 40 15 40 15Z" fill="currentColor" opacity="0.15" />
                                        </svg>
                                    </div>
                                    <div className="product-detail__related-content">
                                        <h3>{relProduct.name}</h3>
                                        <span>View Product →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="product-detail__related-cta">
                            <Link to="/products" className="btn btn-secondary">
                                View All Products
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProductDetail;
