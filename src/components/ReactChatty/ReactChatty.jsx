import React from 'react';
import MessageArea from 'src/components/MessageArea/MessageArea';
import TypingArea from 'src/components/TypingArea/TypingArea';

import './ReactChatty.scss';

const ReactChatty = ({messages}) =>
  <div className='react-chatty'>
    <MessageArea messages={messages}/>
    <TypingArea/>
  </div>;

ReactChatty.propTypes = {
  messages: MessageArea.propTypes.messages
};

export default ReactChatty;
