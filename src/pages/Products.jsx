import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import { products, categories, getProductsByCategory } from '../data/products';
import './Products.css';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(products);

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
                    {/* Category Tabs */}
                    <div className="products-page__categories">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`products-page__category ${activeCategory === category.id ? 'products-page__category--active' : ''}`}
                                onClick={() => handleCategoryChange(category.id)}
                            >
                                <span className="products-page__category-icon">{category.icon}</span>
                                <span className="products-page__category-name">{category.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="products-page__grid">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="products-page__item"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProducts.length === 0 && (
                        <div className="products-page__empty">
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
