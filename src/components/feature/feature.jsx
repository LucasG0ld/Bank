import "./feature.css"
import PropTypes from "prop-types";

function Feature({ img, alt, title, desc }) {
    
    return(
        <div className="feature-item-container">
            <div className="feature-item">
                <img src={ img } alt={ alt } className="feature-icon" />
                <h3 className="feature-item-title">{ title }</h3>
                <p>
                    { desc }
                </p>
            </div>
        </div>
    );
};

export default Feature

Feature.proptype = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired 
}