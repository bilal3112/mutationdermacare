import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Top Section - CTA Banner */}
            <div className="footer__cta-banner">
                <div className="container">
                    <div className="footer__cta-content">
                        <div className="footer__cta-text">
                            <h3>Experience Premium Herbal Care</h3>
                            <p>15+ years of dermatology expertise at your service</p>
                        </div>
                        <Link to="/contact" className="footer__cta-btn">
                            Get in Touch
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer__main">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand Column */}
                        <div className="footer__brand">
                            <Link to="/" className="footer__logo">
                                <img src="/assets/headerlogo.svg" alt="Mutation Dermacare" className="footer__logo-img" />
                            </Link>
                            <p className="footer__tagline">Luxury in Every Touch</p>
                            <p className="footer__description">
                                Premium Ayurvedic & Herbal Skin and Hair Care solutions. 100% steroid-free, safe for all ages.
                            </p>

                            {/* Social Links */}
                            <div className="footer__social">
                                <a href="#" className="footer__social-link" aria-label="Facebook">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a href="#" className="footer__social-link" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                                <a href="https://wa.me/919921269023" target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--whatsapp" aria-label="WhatsApp">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer__column">
                            <h4 className="footer__heading">Quick Links</h4>
                            <ul className="footer__links">
                                <li><Link to="/" className="footer__link">Home</Link></li>
                                <li><Link to="/about" className="footer__link">About Us</Link></li>
                                <li><Link to="/products" className="footer__link">Products</Link></li>
                                <li><Link to="/services" className="footer__link">Services</Link></li>
                                <li><Link to="/contact" className="footer__link">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="footer__column">
                            <h4 className="footer__heading">Products</h4>
                            <ul className="footer__links">
                                <li><Link to="/products?category=skin-care" className="footer__link">Skin Care</Link></li>
                                <li><Link to="/products?category=hair-care" className="footer__link">Hair Care</Link></li>
                                <li><Link to="/products?category=baby-care" className="footer__link">Baby Care</Link></li>
                                <li><Link to="/products?category=antifungal-care" className="footer__link">Antifungal Care</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer__column footer__column--contact">
                            <h4 className="footer__heading">Get in Touch</h4>
                            <div className="footer__contact-cards">
                                <a href="tel:+919921269023" className="footer__contact-card">
                                    <div className="footer__contact-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div className="footer__contact-info">
                                        <span className="footer__contact-label">Call Us</span>
                                        <span className="footer__contact-value">+91 99212 69023</span>
                                    </div>
                                </a>

                                <a href="https://wa.me/919921269023?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Mutation%20Dermacare%20products." target="_blank" rel="noopener noreferrer" className="footer__contact-card footer__contact-card--whatsapp">
                                    <div className="footer__contact-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div className="footer__contact-info">
                                        <span className="footer__contact-label">WhatsApp</span>
                                        <span className="footer__contact-value">Chat with us</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-content">
                        <p className="footer__copyright">
                            © {currentYear} Mutation Dermacare. All rights reserved.
                        </p>
                        <div className="footer__bottom-right">
                            <span className="footer__experience">
                                <span className="footer__experience-number">15+</span> Years of Excellence
                            </span>
                            <span className="footer__divider">•</span>
                            <a href="https://www.eriasoftware.com" target="_blank" rel="noopener noreferrer" className="footer__crafted">
                                Crafted by Eria Software
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
