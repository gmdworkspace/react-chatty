import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './MessageBubble.scss';

const MessageBubble = ({message, position}) => <div className={classnames('message-bubble', position)}>{message}</div>;

MessageBubble.propTypes = {
  message: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right'])
};

export default MessageBubble;
