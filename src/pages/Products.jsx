import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { products, categories, getProductsByCategory } from '../data/products';
import './Products.css';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for smoother UX
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.find(c => c.id === categoryParam)) {
            setActiveCategory(categoryParam);
        }
    }, [searchParams]);

    useEffect(() => {
        setFilteredProducts(getProductsByCategory(activeCategory));
    }, [activeCategory]);

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        if (categoryId === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ category: categoryId });
        }
    };

    // Get product count per category
    const getCategoryCount = (categoryId) => {
        if (categoryId === 'all') return products.length;
        return products.filter(p => p.category === categoryId).length;
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="products-page">
            {/* Hero */}
            <section className="products-page__hero">
                <div className="products-page__hero-bg"></div>
                <div className="container">
                    <div className="products-page__hero-content">
                        <span className="products-page__hero-label">Our Products</span>
                        <h1 className="products-page__hero-title">
                            Premium <span>Herbal Solutions</span>
                        </h1>
                        <p className="products-page__hero-description">
                            Discover our carefully formulated range of Ayurvedic products for lasting
                            skin and hair health. 100% steroid-free, safe for all ages.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-page__main section">
                <div className="container">
                    {/* Category Filter - Horizontal Scroll on Mobile */}
                    <div className="products-page__categories-wrapper">
                        <div className="products-page__categories">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`products-page__category ${activeCategory === category.id ? 'products-page__category--active' : ''}`}
                                    onClick={() => handleCategoryChange(category.id)}
                                >
                                    <span className="products-page__category-icon">{category.icon}</span>
                                    <span className="products-page__category-name">{category.name}</span>
                                    <span className="products-page__category-count">{getCategoryCount(category.id)}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="products-page__grid">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="products-page__item"
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProducts.length === 0 && (
                        <div className="products-page__empty">
                            <div className="products-page__empty-icon">🔍</div>
                            <p>No products found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Info Banner */}
            <section className="products-page__info section bg-beige">
                <div className="container">
                    <div className="products-page__info-content">
                        <div className="products-page__info-icon">🛒</div>
                        <h2 className="products-page__info-title">Online Ordering Coming Soon</h2>
                        <p className="products-page__info-text">
                            We're working on bringing our products directly to your doorstep.
                            In the meantime, please contact us for product inquiries and orders.
                        </p>
                        <a href="/contact" className="btn btn-primary">
                            Contact Us to Order
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
