import React from 'react';
import propTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
function Label ({htmlFor, label,required}) {
    return (
        <label style={{display: 'block'}} htmlFor={htmlFor}>
            {label} { required && <span style={{color: 'red'}}> *</span> }    
        </label>
    )
}

Label.propTypes = {
    /** HTML ID for accociated input */
    htmlFor: propTypes.string.isRequired,

    /** Label text */
    label: propTypes.string.isRequired,

    /** Bar height */
    required: propTypes.bool
};

export default Label;