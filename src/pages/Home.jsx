import HeroSection from '../components/sections/HeroSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CTASection from '../components/sections/CTASection';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <HeroSection />

            {/* About Snippet */}
            <section className="home__about section">
                <div className="container">
                    <div className="home__about-content">
                        <div className="home__about-text">
                            <span className="subheading">About Mutation Dermacare</span>
                            <h2 className="heading-2">Trusted Expertise in Herbal Dermatology</h2>
                            <div className="divider divider-left"></div>
                            <p className="body-large">
                                With over <strong>15 years of experience</strong> in treating skin and hair disorders,
                                we have successfully transformed countless lives using safe, herbal,
                                <strong> steroid-free formulations</strong>.
                            </p>
                            <p>
                                Our dermatology consultation brand specializes in diagnosing and treating recurrent and
                                chronic skin conditions including Psoriasis, Eczema, Atopic Dermatitis, Vitiligo, and more.
                            </p>
                            <div className="home__about-highlights">
                                <div className="home__about-highlight">
                                    <span className="home__about-highlight-icon">✓</span>
                                    <span>Shift from chemical to herbal solutions</span>
                                </div>
                                <div className="home__about-highlight">
                                    <span className="home__about-highlight-icon">✓</span>
                                    <span>Guide to diet-based long-term healing</span>
                                </div>
                                <div className="home__about-highlight">
                                    <span className="home__about-highlight-icon">✓</span>
                                    <span>Safe from neonates to senior citizens</span>
                                </div>
                            </div>
                        </div>
                        <div className="home__about-visual">
                            <div className="home__about-card">
                                <div className="home__about-card-icon">🌿</div>
                                <div className="home__about-card-content">
                                    <span className="home__about-card-number">15+</span>
                                    <span className="home__about-card-label">Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditions Treated */}
            <section className="home__conditions section bg-beige">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">Expert Treatment</span>
                        <h2 className="heading-2">Conditions We Treat</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="home__conditions-grid">
                        <div className="home__conditions-category">
                            <h3 className="home__conditions-title">
                                <span className="home__conditions-icon">🌸</span>
                                Skin Conditions
                            </h3>
                            <ul className="home__conditions-list">
                                <li>Psoriasis Vulgaris</li>
                                <li>Scalp Psoriasis</li>
                                <li>Eczema</li>
                                <li>Atopic Dermatitis</li>
                                <li>Ichthyosis Vulgaris</li>
                                <li>Vitiligo</li>
                                <li>Chronic Dry Skin</li>
                                <li>Diaper Rashes</li>
                            </ul>
                        </div>

                        <div className="home__conditions-category">
                            <h3 className="home__conditions-title">
                                <span className="home__conditions-icon">💇</span>
                                Hair Problems
                            </h3>
                            <ul className="home__conditions-list">
                                <li>Dandruff</li>
                                <li>Early Graying of Hair</li>
                                <li>Hair Fall</li>
                                <li>Weak Hair Roots</li>
                            </ul>
                        </div>

                        <div className="home__conditions-category">
                            <h3 className="home__conditions-title">
                                <span className="home__conditions-icon">🛡️</span>
                                Other Conditions
                            </h3>
                            <ul className="home__conditions-list">
                                <li>Fungal Infections</li>
                                <li>Itching & Rashes</li>
                                <li>Acne</li>
                                <li>Pigmentation Disorders</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturedProducts />

            {/* Video Showcase */}
            <section className="home__video section">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">Watch Our Story</span>
                        <h2 className="heading-2">See Our Products in Action</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="home__video-wrapper">
                        <video
                            className="home__video-player"
                            controls
                            poster="/assets/products/brand-banner.jpg"
                            preload="metadata"
                        >
                            <source src="/assets/products/product-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <CTASection />
        </div>
    );
};

export default Home;
