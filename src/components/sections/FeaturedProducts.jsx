import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import { getFeaturedProducts } from '../../data/products';
import { ChevronRight } from 'lucide-react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const featuredProducts = getFeaturedProducts();

    return (
        <section className="featured-products">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">New Arrivals</h2>
                    <Link to="/products" className="view-all-link">
                        View All <ChevronRight size={16} />
                    </Link>
                </div>

                <div className="products-carousel">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="carousel-item">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
