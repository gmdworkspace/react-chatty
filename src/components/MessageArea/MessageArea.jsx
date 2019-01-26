import React from 'react';
import PropTypes from 'prop-types';
import MessageBubble from './MessageBubble';

const MessageArea = ({messages}) =>
  <div>
    {messages.map((message, i) => <MessageBubble key={i} message={message.msg} position={message.position}/>)}</div>;

MessageArea.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MessageBubble.propTypes))
};

MessageArea.defaultProps = {
  messages: []
};

export default MessageArea;
