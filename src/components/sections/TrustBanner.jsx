import { ShieldCheck, Truck, Clock, CreditCard } from 'lucide-react';
import './TrustBanner.css';

const TrustBanner = () => {
    return (
        <section className="trust-banner">
            <div className="container">
                <div className="trust-grid">
                    <div className="trust-item">
                        <ShieldCheck className="trust-icon" size={32} />
                        <div className="trust-text">
                            <h4>100% Secure</h4>
                            <p>Payments</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <Truck className="trust-icon" size={32} />
                        <div className="trust-text">
                            <h4>Fast Shipping</h4>
                            <p>Across India</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <Clock className="trust-icon" size={32} />
                        <div className="trust-text">
                            <h4>24/7 Support</h4>
                            <p>Online Support</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <CreditCard className="trust-icon" size={32} />
                        <div className="trust-text">
                            <h4>Safe Payment</h4>
                            <p>100% Secure</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBanner;
