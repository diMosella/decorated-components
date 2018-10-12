import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../styles/main.scss';

const withThemeGeoWeb = (InputComponent) => {
  class DecoratedInput extends PureComponent {
    render () {
      const { type, onChange, children, value, ...passThroughProps } = this.props;
      const wrappedOnChange = (evt) => onChange(evt, value);
      return <label>
        {children}
        <InputComponent type={type} value={value} onChange={wrappedOnChange} {...passThroughProps} />
      </label>;
    }
  };

  DecoratedInput.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func
  };

  return DecoratedInput;
};

/**
 * Adds specific decoration (style and functionality)
 * @param {string} themeName The name of the theme to apply
 * @param {string} variantName The name of the variant of the theme to use
 * @returns {func} The HOC to apply
 */
export const withDecoration = (themeName, variantName) => {
  console.log('withDecoration:', 'theme', themeName, 'variant', variantName);
  switch (themeName) {
    case 'geoweb':
      return withThemeGeoWeb;
    default:
      return (InputComponent) => (props) => <InputComponent {...props} />;
  }
};
