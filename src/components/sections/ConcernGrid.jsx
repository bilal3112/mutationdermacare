import { Link } from 'react-router-dom';
import { Smile, Sparkles, Baby, Shield, Heart, Activity } from 'lucide-react';
import './ConcernGrid.css';

const concerns = [
    { id: 1, title: 'Skin Care', icon: Smile, link: '/products?cat=skin' },
    { id: 2, title: 'Hair Care', icon: Sparkles, link: '/products?cat=hair' },
    { id: 3, title: 'Baby Care', icon: Baby, link: '/products?cat=baby' },
    { id: 4, title: 'Immunity', icon: Shield, link: '/products?cat=immunity' },
    { id: 5, title: 'Personal Care', icon: Heart, link: '/products?cat=personal' },
    { id: 6, title: 'General Health', icon: Activity, link: '/products?cat=general' },
];

const ConcernGrid = () => {
    return (
        <section className="concern-section">
            <div className="container">
                <h2 className="section-title">Shop by Health Concern</h2>
                <div className="concern-grid">
                    {concerns.map((concern) => (
                        <Link to={concern.link} key={concern.id} className="concern-item">
                            <div className="concern-icon">
                                <concern.icon size={32} />
                            </div>
                            <span className="concern-title">{concern.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConcernGrid;
