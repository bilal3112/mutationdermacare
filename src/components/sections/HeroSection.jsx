import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__content">
                    <div className="hero__text-content">
                        <span className="hero__subtitle">Premium Herbal Care</span>
                        <h1 className="hero__title">
                            Natural Solutions for <br />
                            <span className="text-highlight">Healthy Skin</span>
                        </h1>
                        <p className="hero__description">
                            Safe, effective, and 100% steroid-free formulations for all ages.
                        </p>
                        <Link to="/products" className="btn btn-primary">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
