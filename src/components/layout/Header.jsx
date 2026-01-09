import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Menu,
    X,
    ChevronDown,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header-wrapper">
            {/* Top Promo Bar */}
            <div className="promo-bar">
                <div className="container promo-bar__content">
                    <span className="promo-bar__text">
                        Free Consultation on All Skin & Hair Concerns | 100% Ayurvedic & Herbal Solutions
                    </span>
                    <div className="promo-bar__socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={14} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter size={14} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={14} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header with Logo */}
            <div className="main-header">
                <div className="container main-header__content">
                    <Link to="/" className="main-header__logo" onClick={closeMenu}>
                        <img src="/assets/headerlogo.svg" alt="Mutation Dermacare" />
                    </Link>

                    {/* Header Right Actions */}
                    <div className="main-header__actions">
                        <a href="tel:+911234567890" className="header-contact">
                            <span className="header-contact__label">Call Us:</span>
                            <span className="header-contact__number">+91-123-456-7890</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className={`nav-bar ${isSticky ? 'sticky' : ''}`}>
                <div className="container nav-bar__content">
                    {/* Mobile Menu Toggle */}
                    <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        <span>Menu</span>
                    </button>

                    {/* Desktop Menu */}
                    <nav className="desktop-nav">
                        <ul className="nav-list">
                            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                            <li className="nav-item-dropdown">
                                <NavLink to="/products" className="nav-link">
                                    Products <ChevronDown size={14} />
                                </NavLink>
                            </li>
                            <li className="nav-item-dropdown">
                                <NavLink to="/treatments" className="nav-link">
                                    Treatments <ChevronDown size={14} />
                                </NavLink>
                            </li>
                            <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
                            <li><NavLink to="/media" className="nav-link">Media</NavLink></li>
                            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                        </ul>
                    </nav>

                    {/* CTA Button */}
                    <Link to="/consultation" className="nav-cta">
                        Book Consultation
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu__header">
                    <Link to="/" className="mobile-menu__logo" onClick={closeMenu}>
                        <img src="/assets/headerlogo.svg" alt="Mutation Dermacare" />
                    </Link>
                    <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close menu">
                        <X size={24} />
                    </button>
                </div>
                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
                        <li><Link to="/treatments" onClick={closeMenu}>Treatments</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to="/media" onClick={closeMenu}>Media</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                    <Link to="/consultation" className="mobile-cta" onClick={closeMenu}>
                        Book Consultation
                    </Link>
                </nav>
            </div>
            {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </header>
    );
};

export default Header;
