import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './CTASection.css';

const CTASection = () => {
    useScrollAnimation();

    return (
        <section className="cta-section">
            <div className="cta-section__background">
                <div className="cta-section__pattern"></div>
                <div className="cta-section__decoration cta-section__decoration--1"></div>
                <div className="cta-section__decoration cta-section__decoration--2"></div>
            </div>

            <div className="container">
                <div className="cta-section__content reveal">
                    <span className="cta-section__label">Book Your Consultation Today</span>
                    <h2 className="cta-section__title">
                        Ready for <span className="cta-section__title-accent">Healthy Skin?</span>
                    </h2>
                    <p className="cta-section__description">
                        Take the first step towards natural, lasting skin and hair health.
                        Our experts are ready to guide you on your journey to wellness.
                    </p>
                    <div className="cta-section__buttons">
                        <Link to="/contact" className="btn btn-white btn-lg">
                            Consult Our Experts
                        </Link>
                        <a href="https://wa.me/919921269023?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20with%20Mutation%20Dermacare." className="btn btn-secondary cta-section__whatsapp" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
