import React from 'react';
import MessageArea from 'src/components/MessageArea/MessageArea';
import TypingArea from 'src/components/TypingArea/TypingArea';
import {settingsPropType} from 'src/utils/proptypes-mapper';
import {defaultSettings} from 'src/utils/settings';

import './ReactChatty.scss';

const ReactChatty = ({messages, settings}) =>
  <div className='react-chatty'>
    <MessageArea messages={messages} settings={settings}/>
    <TypingArea/>
  </div>;

ReactChatty.propTypes = {
  messages: MessageArea.propTypes.messages,
  settings: settingsPropType
};

ReactChatty.defaultProps = {
  settings: defaultSettings
};

export default ReactChatty;
