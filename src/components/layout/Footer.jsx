import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Search } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Column 1: Contact Info */}
                    <div className="footer__column">
                        <h4 className="footer__heading">Contact Us</h4>
                        <div className="footer__contact-info">
                            <div className="contact-item">
                                <MapPin size={18} className="contact-icon" />
                                <p>
                                    <strong>Mutation DermaCare</strong><br />
                                    123, Healthcare IT Park,<br />
                                    Noida, UP - 201301
                                </p>
                            </div>
                            <div className="contact-item">
                                <Phone size={18} className="contact-icon" />
                                <p>+91-120-4512000</p>
                            </div>
                            <div className="contact-item">
                                <Mail size={18} className="contact-icon" />
                                <p>info@mutationdermacare.com</p>
                            </div>
                        </div>
                        <div className="footer__social">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Information */}
                    <div className="footer__column">
                        <h4 className="footer__heading">Information</h4>
                        <ul className="footer__links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/delivery">Delivery Information</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                            <li><Link to="/blog">Our Blog</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Search (Replacing actual Search with Categories for usefulness) */}
                    <div className="footer__column">
                        <h4 className="footer__heading">Our Products</h4>
                        <ul className="footer__links">
                            <li><Link to="/products?cat=skin">Skin Care</Link></li>
                            <li><Link to="/products?cat=hair">Hair Care</Link></li>
                            <li><Link to="/products?cat=baby">Baby Care</Link></li>
                            <li><Link to="/products?cat=kits">Remedy Kits</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Customer Service */}
                    <div className="footer__column">
                        <h4 className="footer__heading">Customer Service</h4>
                        <ul className="footer__links">
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/returns">Returns</Link></li>
                            <li><Link to="/sitemap">Site Map</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: My Account */}
                    <div className="footer__column">
                        <h4 className="footer__heading">My Account</h4>
                        <ul className="footer__links">
                            <li><Link to="/account">My Account</Link></li>
                            <li><Link to="/orders">Order History</Link></li>
                            <li><Link to="/wishlist">Wish List</Link></li>
                            <li><Link to="/newsletter">Newsletter</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="container footer__bottom-content">
                    <p className="copyright">© {currentYear} Mutation DermaCare. All Rights Reserved.</p>
                    <div className="payment-methods">
                        {/* Placeholder for payment icons */}
                        <div className="payment-icon">VISA</div>
                        <div className="payment-icon">MasterCard</div>
                        <div className="payment-icon">UPI</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
