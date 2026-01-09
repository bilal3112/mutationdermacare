import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero__background-pattern"></div>
            <div className="hero__container">
                <div className="hero__content">
                    {/* Left Content */}
                    <div className="hero__text-content">
                        <span className="hero__tagline">Premium Ayurvedic & Herbal Care</span>
                        <h1 className="hero__title">
                            <span className="hero__title-highlight">Natural Solutions</span>
                            <br />
                            For Healthy Skin & Hair
                        </h1>
                        <p className="hero__description">
                            Discover the power of Ayurveda with our 100% natural, steroid-free formulations.
                            Safe for all ages, backed by ancient wisdom and modern science.
                        </p>
                        <div className="hero__cta-group">
                            <Link to="/consultation" className="hero__btn hero__btn--primary">
                                Book Consultation
                            </Link>
                            <Link to="/products" className="hero__btn hero__btn--secondary">
                                Explore Products
                            </Link>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="hero__visual">
                        <div className="hero__image-wrapper">
                            <img
                                src="/assets/hero-illustration.png"
                                alt="Natural Herbal Products"
                                className="hero__image"
                            />
                        </div>
                        {/* Floating Elements */}
                        <div className="hero__float hero__float--1">🌿</div>
                        <div className="hero__float hero__float--2">✨</div>
                        <div className="hero__float hero__float--3">🍃</div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="hero__badges">
                    <div className="hero__badge">
                        <span className="hero__badge-icon">✓</span>
                        <span className="hero__badge-text">100% Natural</span>
                    </div>
                    <div className="hero__badge">
                        <span className="hero__badge-icon">✓</span>
                        <span className="hero__badge-text">Steroid Free</span>
                    </div>
                    <div className="hero__badge">
                        <span className="hero__badge-icon">✓</span>
                        <span className="hero__badge-text">Safe for All Ages</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
