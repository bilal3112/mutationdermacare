import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import { getFeaturedProducts } from '../../data/products';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const featuredProducts = getFeaturedProducts();

    return (
        <section className="featured-products section">
            <div className="container">
                <div className="section-header">
                    <span className="subheading">Premium Herbal Solutions</span>
                    <h2 className="heading-2">Featured Products</h2>
                    <div className="divider"></div>
                    <p>
                        Discover our carefully formulated range of premium herbal products,
                        designed for lasting skin and hair health.
                    </p>
                </div>

                <div className="featured-products__grid">
                    {featuredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="featured-products__item"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <div className="featured-products__cta">
                    <Link to="/products" className="btn btn-primary btn-lg">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
