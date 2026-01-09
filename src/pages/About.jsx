import { Link } from 'react-router-dom';
import CTASection from '../components/sections/CTASection';
import './About.css';

const About = () => {
    return (
        <div className="about">
            {/* Hero */}
            <section className="about__hero">
                <div className="about__hero-bg"></div>
                <div className="container">
                    <div className="about__hero-content">
                        <span className="about__hero-label">About Us</span>
                        <h1 className="about__hero-title">15+ Years of<br /><span>Herbal Excellence</span></h1>
                        <p className="about__hero-description">
                            We are a dermatology consultation brand with over 15 years of experience in
                            treating skin and hair disorders using safe, herbal, steroid-free formulations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="about__story section">
                <div className="container">
                    <div className="about__story-content">
                        <div className="about__story-text">
                            <span className="subheading">Our Journey</span>
                            <h2 className="heading-2">Dedicated to Natural Healing</h2>
                            <div className="divider divider-left"></div>
                            <p>
                                For over 15 years, we have been at the forefront of herbal dermatology,
                                helping thousands of patients transition from chemical-based and steroid
                                treatments to safe, natural alternatives.
                            </p>
                            <p>
                                Our philosophy goes beyond just treating symptoms. We guide our patients
                                through a transformative journey – from chemical treatments to herbal
                                solutions, and ultimately to diet-based long-term healing.
                            </p>
                            <p>
                                Every product we create and every treatment we recommend is backed by
                                our commitment to being 100% steroid-free and free from harmful chemicals,
                                making our solutions safe for everyone – from newborn babies to senior citizens.
                            </p>
                        </div>
                        <div className="about__story-features">
                            <div className="about__feature-card">
                                <div className="about__feature-icon">🏆</div>
                                <h3>15+ Years</h3>
                                <p>Of dermatology excellence and patient care</p>
                            </div>
                            <div className="about__feature-card">
                                <div className="about__feature-icon">🌿</div>
                                <h3>100% Herbal</h3>
                                <p>Pure, natural ingredients in every product</p>
                            </div>
                            <div className="about__feature-card">
                                <div className="about__feature-icon">🛡️</div>
                                <h3>Steroid-Free</h3>
                                <p>Safe formulations with no harmful chemicals</p>
                            </div>
                            <div className="about__feature-card">
                                <div className="about__feature-icon">👨‍👩‍👧‍👦</div>
                                <h3>All Ages</h3>
                                <p>From neonates to geriatric patients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="about__difference section bg-beige">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">The Mutation Difference</span>
                        <h2 className="heading-2">What Makes Us Different</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="about__difference-grid">
                        <div className="about__difference-card">
                            <div className="about__difference-number">01</div>
                            <h3>Chemical to Herbal Transition</h3>
                            <p>
                                We help patients move away from chemical-based and steroid treatments
                                to safe, effective herbal solutions that work with your body's natural
                                healing processes.
                            </p>
                        </div>
                        <div className="about__difference-card">
                            <div className="about__difference-number">02</div>
                            <h3>Diet-Based Long-Term Healing</h3>
                            <p>
                                Beyond herbal treatments, we guide patients towards diet-based healing
                                for sustainable, long-term results that address the root cause of skin
                                and hair problems.
                            </p>
                        </div>
                        <div className="about__difference-card">
                            <div className="about__difference-number">03</div>
                            <h3>Safe for All Ages</h3>
                            <p>
                                Our products and treatments are formulated to be safe for everyone –
                                from newborn babies with sensitive skin to elderly patients with
                                chronic conditions.
                            </p>
                        </div>
                        <div className="about__difference-card">
                            <div className="about__difference-number">04</div>
                            <h3>Expert Dermatology</h3>
                            <p>
                                Every product and treatment is backed by 15+ years of clinical
                                experience in treating complex and chronic skin and hair disorders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Areas */}
            <section className="about__expertise section">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">Our Expertise</span>
                        <h2 className="heading-2">Conditions We Successfully Treat</h2>
                        <div className="divider"></div>
                        <p>
                            We have achieved excellent results in treating a wide range of skin,
                            hair, and fungal conditions using our herbal approach.
                        </p>
                    </div>

                    <div className="about__expertise-grid">
                        <div className="about__expertise-category">
                            <h3>Skin Conditions</h3>
                            <ul>
                                <li>Psoriasis Vulgaris</li>
                                <li>Scalp Psoriasis</li>
                                <li>Eczema</li>
                                <li>Atopic Dermatitis</li>
                                <li>Ichthyosis Vulgaris</li>
                                <li>Vitiligo</li>
                                <li>Chronic Dry Skin Conditions in Children</li>
                                <li>Diaper Rashes in Babies</li>
                            </ul>
                        </div>

                        <div className="about__expertise-category">
                            <h3>Hair Problems</h3>
                            <ul>
                                <li>Dandruff</li>
                                <li>Early Graying of Hair</li>
                                <li>Hair Fall</li>
                                <li>Weak Hair Roots</li>
                            </ul>
                        </div>

                        <div className="about__expertise-category">
                            <h3>Fungal & Other Infections</h3>
                            <ul>
                                <li>All Types of Fungal Infections</li>
                                <li>Itching from Sweating</li>
                                <li>Infections in Body Folds</li>
                                <li>Acne & Pigmentation Disorders</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default About;
