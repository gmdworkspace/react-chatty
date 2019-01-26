import React from 'react';
import MessageArea from 'src/components/MessageArea/MessageArea';

import './ReactChatty.scss';

const ReactChatty = ({messages}) =>
  <div className='react-chatty'>
    <MessageArea messages={messages}/>
  </div>;

ReactChatty.propTypes = {
  messages: MessageArea.propTypes.messages
};

export default ReactChatty;
