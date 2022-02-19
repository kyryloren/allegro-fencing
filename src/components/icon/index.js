import React from 'react';
import PropTypes from 'prop-types';
import IconRightArrow from './arrow-right';

const Icon = ({ name }) => {
  switch (name) {
    case 'arrow-right':
      return <IconRightArrow />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
