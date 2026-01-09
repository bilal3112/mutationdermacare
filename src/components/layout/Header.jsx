import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Phone, 
  Search, 
  User, 
  Heart, 
  Repeat, 
  ShoppingCart, 
  Menu, 
  X,
  ChevronDown
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
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar__content">
                    <div className="top-bar__left">
                        <a href="tel:+911204512000" className="top-bar__link">
                            <Phone size={14} /> <span>+91-120-4512000</span>
                        </a>
                    </div>
                    <div className="top-bar__right">
                        <span>Welcome to Mutation Dermacare!</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="main-header">
                <div className="container main-header__content">
                    {/* Logo */}
                    <Link to="/" className="main-header__logo" onClick={closeMenu}>
                        <img src="/assets/headerlogo.svg" alt="Mutation Dermacare" />
                    </Link>

                    {/* Search Bar */}
                    <div className="main-header__search">
                        <form className="search-form">
                            <input type="text" placeholder="Search for products..." />
                            <button type="submit">
                                <Search size={20} />
                            </button>
                        </form>
                    </div>

                    {/* Actions */}
                    <div className="main-header__actions">
                        <Link to="/login" className="action-item">
                            <User size={24} />
                            <span>Login / Register</span>
                        </Link>
                        <Link to="/wishlist" className="action-item desktop-only">
                            <Heart size={24} />
                        </Link>
                         <Link to="/compare" className="action-item desktop-only">
                            <Repeat size={24} />
                        </Link>
                        <Link to="/cart" className="action-item">
                            <div className="cart-icon">
                                <ShoppingCart size={24} />
                                <span className="cart-count">0</span>
                            </div>
                            <div className="cart-info desktop-only">
                                <span className="cart-total">₹0.00</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className={`nav-bar ${isSticky ? 'sticky' : ''}`}>
                <div className="container nav-bar__content">
                    {/* Mobile Menu Toggle */}
                    <button className="mobile-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        <span>Menu</span>
                    </button>

                    {/* Desktop Menu */}
                    <nav className="desktop-nav">
                        <ul className="nav-list">
                            <li><NavLink to="/products" className="nav-link">Homeopathic Products <ChevronDown size={14}/></NavLink></li>
                            <li><NavLink to="/diseases" className="nav-link">Diseases <ChevronDown size={14}/></NavLink></li>
                            <li><NavLink to="/personal-care" className="nav-link">Personal Care <ChevronDown size={14}/></NavLink></li>
                            <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
                            <li><NavLink to="/media" className="nav-link">Media</NavLink></li>
                            <li><NavLink to="/catalogue" className="nav-link">Download Catalogue</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                     <ul className="mobile-nav-list">
                        <li><Link to="/products" onClick={closeMenu}>Homeopathic Products</Link></li>
                        <li><Link to="/diseases" onClick={closeMenu}>Diseases</Link></li>
                        <li><Link to="/personal-care" onClick={closeMenu}>Personal Care</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
            {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </header>
    );
};

export default Header;
