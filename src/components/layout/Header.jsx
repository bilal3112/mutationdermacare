import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    {/* Logo */}
                    <Link to="/" className="nav__logo" onClick={closeMenu}>
                        <img src="/assets/headerlogo.svg" alt="Mutation Dermacare Logo" className="nav__logo-img" />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="nav__links">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}>
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`nav__toggle ${isMenuOpen ? 'nav__toggle--open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="nav__toggle-bar"></span>
                        <span className="nav__toggle-bar"></span>
                        <span className="nav__toggle-bar"></span>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
                <ul className="mobile-menu__links">
                    <li>
                        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'}>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'}>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && <div className="mobile-menu__overlay" onClick={closeMenu}></div>}
        </header>
    );
};

export default Header;
