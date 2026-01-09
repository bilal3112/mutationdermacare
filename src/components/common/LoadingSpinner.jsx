import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <div className="loading-spinner__content">
                <div className="loading-spinner__logo">
                    <img src="/assets/headerlogo.svg" alt="Mutation Dermacare" />
                </div>
                <div className="loading-spinner__ring">
                    <div className="loading-spinner__ring-inner"></div>
                </div>
                <p className="loading-spinner__text">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
