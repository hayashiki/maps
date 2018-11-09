import _ from 'lodash';
import React from 'react';
import {
  Util,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { Link as ReactRouterLink } from 'react-router-dom';

/**
 * Renders a tag that allows for using bootstrap classes
 */
const ReactstrapTag = (props) => {
  const Tag = props.tag;
  const tagProps = _.omit(props, ['className', 'children', 'tag']);
  if (props.className) {
    return (
      <Tag className={Util.mapToCssModules(props.className)} {...tagProps}>
        {props.children}
      </Tag>
    );
  }
  return (
    <Tag {...tagProps}>
      {props.children}
    </Tag>
  );
};

ReactstrapTag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
};

ReactstrapTag.defaultProps = {
  className: null,
  children: null,
  tag: 'div',
};

export default ReactstrapTag;


export const RouterLink = (props) => {
  const tagProps = _.omit(props, ['className', 'children', 'tag']);
  if (props.className) {
    return (
      <ReactRouterLink className={Util.mapToCssModules(props.className)} {...tagProps}>
        {props.children}
      </ReactRouterLink>
    );
  }
  return (
    <ReactRouterLink {...tagProps}>
      {props.children}
    </ReactRouterLink>
  );
};

RouterLink.propTypes = ReactstrapTag.propTypes;
RouterLink.defaultProps = ReactstrapTag.defaultProps;

export const Div = props => (<ReactstrapTag tag="div" {...props} />);
export const Span = props => (<ReactstrapTag tag="span" {...props} />);
export const Img = props => (<ReactstrapTag tag="img" {...props} />);
export const H6 = props => (<ReactstrapTag tag="h6" {...props} />);
export const H5 = props => (<ReactstrapTag tag="h5" {...props} />);
export const H4 = props => (<ReactstrapTag tag="h4" {...props} />);
export const H3 = props => (<ReactstrapTag tag="h3" {...props} />);
export const H2 = props => (<ReactstrapTag tag="h2" {...props} />);
export const H1 = props => (<ReactstrapTag tag="h1" {...props} />);
export const Para = props => (<ReactstrapTag tag="p" {...props} />);
export const Small = props => (<ReactstrapTag tag="small" {...props} />);
export const Icon = props => (<ReactstrapTag tag="i" {...props} />);
export const Link = props => (<ReactstrapTag tag="a" {...props} />);
export const Th = props => (<ReactstrapTag tag="th" {...props} />);
export const Td = props => (<ReactstrapTag tag="td" {...props} />);
