import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../styles/main';
import '../../stories/stories';

const filterProps = (props, predicate) =>
  (Object.entries(props).filter((entry) => predicate(...entry))
    .reduce((accumulator, entry) => {
      accumulator[entry[0]] = entry[1];
      return accumulator;
    }, {}));

const withThemeGeoWeb = (InputComponent) => {
  class DecoratedInput extends PureComponent {
    render () {
      const { type, onChange, children, value, disabled, ...passThroughProps } = this.props;
      const dataSet = filterProps(this.props, (key, value) => key.startsWith('data-'));
      if (disabled === true) {
        dataSet['data-disabled'] = true;
      }
      console.log(disabled, dataSet['data-disabled']);
      const wrappedOnChange = (evt) => onChange(evt, value);
      return <label className='decorated-input' {...dataSet} disabled={dataSet['data-disabled']}>
        <span />
        <span>{children}</span>
        <InputComponent type={type} value={value} disabled={dataSet['data-disabled']}
          onChange={wrappedOnChange} {...passThroughProps} />
      </label>;
    }
  };

  DecoratedInput.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.element,
    value: PropTypes.any,
    disabled: PropTypes.bool
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
