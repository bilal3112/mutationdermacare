import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual API call when backend is ready)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-page__hero">
                <div className="contact-page__hero-bg"></div>
                <div className="container">
                    <div className="contact-page__hero-content">
                        <span className="contact-page__hero-label">Contact Us</span>
                        <h1 className="contact-page__hero-title">
                            Get In <span>Touch</span>
                        </h1>
                        <p className="contact-page__hero-description">
                            Have questions or need a consultation? We're here to help you on your
                            journey to healthy skin and hair.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-page__main section">
                <div className="container">
                    <div className="contact-page__content">
                        {/* Contact Info */}
                        <div className="contact-page__info">
                            <h2>Contact Information</h2>
                            <p className="contact-page__info-text">
                                Reach out to us through any of these channels. We typically respond
                                within 24 hours.
                            </p>

                            <div className="contact-page__info-items">
                                <div className="contact-page__info-item">
                                    <div className="contact-page__info-icon">📞</div>
                                    <div className="contact-page__info-content">
                                        <h3>Phone</h3>
                                        <a href="tel:+919921269023">+91 99212 69023</a>
                                        <a href="tel:+919167933046">+91 91679 33046</a>
                                    </div>
                                </div>

                                <div className="contact-page__info-item">
                                    <div className="contact-page__info-icon">💬</div>
                                    <div className="contact-page__info-content">
                                        <h3>WhatsApp</h3>
                                        <a href="https://wa.me/919921269023?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Mutation%20Dermacare%20products%20and%20services." target="_blank" rel="noopener noreferrer">
                                            Message us on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-page__info-item">
                                    <div className="contact-page__info-icon">✉️</div>
                                    <div className="contact-page__info-content">
                                        <h3>Email</h3>
                                        <a href="mailto:info@mutationdermacare.com">info@mutationdermacare.com</a>
                                    </div>
                                </div>

                                <div className="contact-page__info-item">
                                    <div className="contact-page__info-icon">🕐</div>
                                    <div className="contact-page__info-content">
                                        <h3>Working Hours</h3>
                                        <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}
                            <a
                                href="https://wa.me/919921269023?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Mutation%20Dermacare%20products%20and%20services."
                                className="contact-page__whatsapp btn btn-gold btn-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-page__form-wrapper">
                            <h2>Send Us a Message</h2>
                            <form className="contact-page__form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="contact-page__form-row">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="subject">Subject *</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="form-input"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="consultation">Book a Consultation</option>
                                        <option value="product-inquiry">Product Inquiry</option>
                                        <option value="order">Place an Order</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Your Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell us about your skin/hair concerns or any questions you have..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg contact-page__submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="contact-page__success">
                                        <span>✓</span> Thank you! Your message has been sent successfully. We'll get back to you soon.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinic Section (Future Ready) */}
            <section className="contact-page__clinic section bg-beige">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">Visit Us</span>
                        <h2 className="heading-2">Clinic Location</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="contact-page__clinic-content">
                        <div className="contact-page__clinic-card">
                            <div className="contact-page__clinic-icon">📍</div>
                            <h3>Clinic Address</h3>
                            <p>Coming Soon</p>
                            <span className="contact-page__clinic-note">
                                Our physical clinic location will be announced shortly.
                                For now, please reach out via phone or WhatsApp for consultations.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
