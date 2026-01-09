import './ServiceCard.css';

const ServiceCard = ({ service, index = 0 }) => {
    const { name, icon, description, features } = service;

    return (
        <article
            className="service-card card"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="service-card__icon">
                <span>{icon}</span>
            </div>

            <h3 className="service-card__name">{name}</h3>
            <p className="service-card__description">{description}</p>

            {features && features.length > 0 && (
                <ul className="service-card__features">
                    {features.map((feature, idx) => (
                        <li key={idx} className="service-card__feature">
                            <span className="service-card__feature-dot"></span>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
};

export default ServiceCard;
