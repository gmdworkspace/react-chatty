import React from 'react';
import PropTypes from 'prop-types';
import MessageBubble from './MessageBubble';

import './MessageArea.style.scss';

const MessageArea = ({messages}) =>
  <div className='message-area'>
    {messages.map((message, i) => <MessageBubble key={i} message={message.msg} position={message.position}/>)}</div>;

MessageArea.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MessageBubble.propTypes))
};

MessageArea.defaultProps = {
  messages: []
};

export default MessageArea;
