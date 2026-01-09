import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero__background">
                <div className="hero__gradient"></div>
                <div className="hero__pattern"></div>
                {/* Decorative elements */}
                <div className="hero__decoration hero__decoration--1"></div>
                <div className="hero__decoration hero__decoration--2"></div>
                <div className="hero__decoration hero__decoration--3"></div>
            </div>

            <div className="container">
                <div className="hero__content">
                    <div className="hero__text">
                        <span className="hero__tagline-label">
                            <span className="hero__tagline-accent">✦</span>
                            Premium Herbal Dermatology
                        </span>

                        <h1 className="hero__title">
                            Luxury in <br />
                            <span className="hero__title-accent">Every Touch</span>
                        </h1>

                        <p className="hero__description">
                            Experience the finest Ayurvedic & Herbal Skin and Hair Care solutions,
                            backed by <strong>15+ years</strong> of dermatology expertise.
                            100% steroid-free, safe for all ages.
                        </p>

                        <div className="hero__cta-group">
                            <Link to="/contact" className="btn btn-gold btn-lg">
                                Book Consultation
                            </Link>
                            <Link to="/products" className="btn btn-secondary btn-lg">
                                Explore Products
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="hero__trust">
                            <div className="hero__trust-item">
                                <span className="hero__trust-icon">🏆</span>
                                <span className="hero__trust-text">15+ Years Experience</span>
                            </div>
                            <div className="hero__trust-item">
                                <span className="hero__trust-icon">🌿</span>
                                <span className="hero__trust-text">100% Herbal</span>
                            </div>
                            <div className="hero__trust-item">
                                <span className="hero__trust-icon">✓</span>
                                <span className="hero__trust-text">Steroid-Free</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero__visual">
                        <div className="hero__visual-wrapper">
                            <div className="hero__visual-ring hero__visual-ring--outer"></div>
                            <div className="hero__visual-ring hero__visual-ring--inner"></div>
                            <div className="hero__visual-content">
                                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__visual-icon">
                                    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                                    <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                                    <path d="M100 30C100 30 60 60 60 110C60 137.614 82.3858 160 110 160C137.614 160 160 137.614 160 110C160 60 100 30 100 30Z" fill="currentColor" opacity="0.15" />
                                    <path d="M100 45C100 45 70 70 70 110C70 132.091 87.9086 150 110 150C132.091 150 150 132.091 150 110C150 70 100 45 100 45Z" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="hero__visual-float hero__visual-float--1">🌿</div>
                            <div className="hero__visual-float hero__visual-float--2">✨</div>
                            <div className="hero__visual-float hero__visual-float--3">🍃</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll">
                <span>Scroll to explore</span>
                <div className="hero__scroll-line"></div>
            </div>
        </section>
    );
};

export default HeroSection;
