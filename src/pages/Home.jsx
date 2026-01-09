import HeroSection from '../components/sections/HeroSection';
import TrustBanner from '../components/sections/TrustBanner';
import ConcernGrid from '../components/sections/ConcernGrid';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <TrustBanner />
            <ConcernGrid />
            {/* Added a second product section for "Best Sellers" to mimic the multiple rows on target site */}
            <FeaturedProducts />

            {/* Keeping it simple for now, can add more sections later */}
        </div>
    );
};

export default Home;
