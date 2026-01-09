import './TrustBadge.css';

const TrustBadge = ({ icon, title, subtitle }) => {
    return (
        <div className="trust-badge">
            <div className="trust-badge__icon">{icon}</div>
            <div className="trust-badge__content">
                <span className="trust-badge__title">{title}</span>
                {subtitle && <span className="trust-badge__subtitle">{subtitle}</span>}
            </div>
        </div>
    );
};

export default TrustBadge;
