import ServiceCard from '../components/common/ServiceCard';
import CTASection from '../components/sections/CTASection';
import { services } from '../data/services';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero */}
            <section className="services-page__hero">
                <div className="services-page__hero-bg"></div>
                <div className="container">
                    <div className="services-page__hero-content">
                        <span className="services-page__hero-label">Our Services</span>
                        <h1 className="services-page__hero-title">
                            Expert <span>Dermatology Care</span>
                        </h1>
                        <p className="services-page__hero-description">
                            Comprehensive skin and hair care consultation services backed by 15+ years
                            of clinical expertise in herbal dermatology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-page__main section">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">What We Offer</span>
                        <h2 className="heading-2">Our Consultation Services</h2>
                        <div className="divider"></div>
                        <p>
                            From routine skin care to complex chronic conditions, we provide
                            personalized herbal treatment plans for all your skin and hair needs.
                        </p>
                    </div>

                    <div className="services-page__grid">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="services-page__process section bg-beige">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">How It Works</span>
                        <h2 className="heading-2">Our Consultation Process</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="services-page__process-steps">
                        <div className="services-page__step">
                            <div className="services-page__step-number">1</div>
                            <h3>Initial Consultation</h3>
                            <p>
                                Detailed analysis of your skin/hair condition, medical history,
                                and lifestyle factors to understand your unique needs.
                            </p>
                        </div>
                        <div className="services-page__step-line"></div>
                        <div className="services-page__step">
                            <div className="services-page__step-number">2</div>
                            <h3>Personalized Treatment Plan</h3>
                            <p>
                                Custom herbal treatment protocol designed specifically for your
                                condition, with clear guidelines and expected outcomes.
                            </p>
                        </div>
                        <div className="services-page__step-line"></div>
                        <div className="services-page__step">
                            <div className="services-page__step-number">3</div>
                            <h3>Ongoing Support</h3>
                            <p>
                                Regular follow-ups to monitor progress, adjust treatments as needed,
                                and guide you towards long-term natural healing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Banner */}
            <section className="services-page__commitment section">
                <div className="container">
                    <div className="services-page__commitment-content">
                        <h2>Our Commitment to You</h2>
                        <div className="services-page__commitment-grid">
                            <div className="services-page__commitment-item">
                                <span className="services-page__commitment-icon">🌿</span>
                                <h3>100% Herbal Approach</h3>
                                <p>All treatments use pure herbal formulations</p>
                            </div>
                            <div className="services-page__commitment-item">
                                <span className="services-page__commitment-icon">🛡️</span>
                                <h3>Steroid-Free Promise</h3>
                                <p>No steroids or harmful chemicals, ever</p>
                            </div>
                            <div className="services-page__commitment-item">
                                <span className="services-page__commitment-icon">👨‍⚕️</span>
                                <h3>Expert Guidance</h3>
                                <p>15+ years of dermatology expertise</p>
                            </div>
                            <div className="services-page__commitment-item">
                                <span className="services-page__commitment-icon">❤️</span>
                                <h3>Patient-First Care</h3>
                                <p>Personalized attention for every patient</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Services;
