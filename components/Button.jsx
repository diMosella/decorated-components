import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const { children } = this.props;
    return <button>{children}</button>;
  }
}

Button.propTypes = {
  children: PropTypes.element
};
