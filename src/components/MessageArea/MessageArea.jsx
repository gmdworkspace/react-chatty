import React from 'react';
import PropTypes from 'prop-types';
import MessageBubble from './MessageBubble';
import {settingsPropType} from 'src/utils/proptypes-mapper';

import './MessageArea.style.scss';

const MessageArea = ({messages, settings}) =>
  <div className='message-area'>
    {messages.map((message, i) => <MessageBubble
      key={i} message={message.msg}
      position={message.position}
      settings={settings}
    />)}</div>;

MessageArea.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MessageBubble.propTypes)),
  settings: settingsPropType
};

MessageArea.defaultProps = {
  messages: []
};

export default MessageArea;
