import React from 'react';
import PropTypes from 'prop-types';

import TextBase from './style';

export default function Text({
  children,
  tag,
  href,
  variant,
  color,
  font,
  className,
}) {
  if (href) {
    return (
      <TextBase
        className={className}
        as="a"
        variant={variant}
        color={color}
        font={font}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </TextBase>
    );
  }

  return (
    <TextBase
      className={className}
      as={tag}
      variant={variant}
      color={color}
      font={font}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'p', 'span']),
  href: PropTypes.string,
  variant: PropTypes.string,
  font: PropTypes.string,
  color: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  variant: 'paragraph',
  tag: 'p',
  href: '',
  font: '\'Roboto\', sans-serif',
  color: 'gray100',
};
