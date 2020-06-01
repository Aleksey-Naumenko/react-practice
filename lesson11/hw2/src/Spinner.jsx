import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ size }) => {
    const styles = {
        width: size,
        height: size,
    };
    return <span style={styles} className="spinner" />;
};

Spinner.propTypes = {
    size: PropTypes.number,
};

Spinner.defaultProps = {
    size: 16,
};

export default Spinner;