import useScrollAnimation from '../../hooks/useScrollAnimation';
import './WhyChooseUs.css';

const benefits = [
    {
        icon: '🌿',
        title: 'Best Herbal Solutions',
        description: 'Premium herbal formulations for skin & hair problems backed by traditional Ayurvedic wisdom.'
    },
    {
        icon: '🛡️',
        title: '100% Steroid-Free',
        description: 'Completely free from steroids and harmful chemicals. Safe for daily use by all age groups.'
    },
    {
        icon: '💎',
        title: 'Premium Quality',
        description: 'High-quality products at affordable prices. Luxury skincare accessible to everyone.'
    },
    {
        icon: '👨‍⚕️',
        title: 'Expert Dermatology',
        description: 'Backed by 15+ years of dermatology expertise and thousands of successful treatments.'
    },
    {
        icon: '❤️',
        title: 'Most Trusted Brand',
        description: 'Trusted by families across generations. The preferred choice for herbal dermatology.'
    },
    {
        icon: '🌱',
        title: 'Natural Healing',
        description: 'We guide patients from chemical treatments to herbal care, then to diet-based long-term healing.'
    }
];

const WhyChooseUs = () => {
    useScrollAnimation();

    return (
        <section className="why-choose section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="subheading">The Mutation Difference</span>
                    <h2 className="heading-2">Why Choose Us</h2>
                    <div className="divider"></div>
                    <p>
                        Experience the difference that 15+ years of dedication to herbal dermatology makes.
                    </p>
                </div>

                <div className="why-choose__grid">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="why-choose__card reveal"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="why-choose__icon">
                                <span>{benefit.icon}</span>
                            </div>
                            <h3 className="why-choose__title">{benefit.title}</h3>
                            <p className="why-choose__description">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="why-choose__stats reveal">
                    <div className="why-choose__stat">
                        <span className="why-choose__stat-number">15+</span>
                        <span className="why-choose__stat-label">Years Experience</span>
                    </div>
                    <div className="why-choose__stat">
                        <span className="why-choose__stat-number">10K+</span>
                        <span className="why-choose__stat-label">Happy Patients</span>
                    </div>
                    <div className="why-choose__stat">
                        <span className="why-choose__stat-number">100%</span>
                        <span className="why-choose__stat-label">Herbal & Natural</span>
                    </div>
                    <div className="why-choose__stat">
                        <span className="why-choose__stat-number">Safe</span>
                        <span className="why-choose__stat-label">For All Ages</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
