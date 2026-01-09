import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, showDetails = true }) => {
    const { id, name, subtitle, category, benefits, image } = product;
    const [imageError, setImageError] = useState(false);

    // Get category display name
    const getCategoryLabel = (cat) => {
        const labels = {
            'skin-care': 'Skin Care',
            'hair-care': 'Hair Care',
            'baby-care': 'Baby Care',
            'antifungal-care': 'Antifungal'
        };
        return labels[cat] || cat;
    };

    return (
        <article className="product-card card">
            <div className="product-card__image-wrapper">
                <div className="product-card__image">
                    {image && !imageError ? (
                        <img
                            src={image}
                            alt={name}
                            className="product-card__img"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="product-card__placeholder">
                            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                                <path d="M40 15C40 15 25 25 25 42C25 50.284 31.716 57 40 57C48.284 57 55 50.284 55 42C55 25 40 15 40 15Z" fill="currentColor" opacity="0.15" />
                                <path d="M40 20C40 20 28 28 28 42C28 48.627 33.373 54 40 54C46.627 54 52 48.627 52 42C52 28 40 20 40 20Z" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                            </svg>
                        </div>
                    )}
                </div>
                <span className="product-card__category">{getCategoryLabel(category)}</span>
            </div>

            <div className="product-card__content">
                <h3 className="product-card__name">{name}</h3>
                {subtitle && <p className="product-card__subtitle">{subtitle}</p>}

                {showDetails && benefits && benefits.length > 0 && (
                    <ul className="product-card__benefits">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="product-card__benefit">
                                <span className="product-card__benefit-icon">✓</span>
                                {benefit}
                            </li>
                        ))}
                        {benefits.length > 3 && (
                            <li className="product-card__benefit product-card__benefit--more">
                                +{benefits.length - 3} more benefits
                            </li>
                        )}
                    </ul>
                )}

                <Link to={`/products/${id}`} className="product-card__cta">
                    <span>Learn More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </article>
    );
};

export default ProductCard;
