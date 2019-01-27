import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {settingsPropType} from 'src/utils/proptypes-mapper';

import './MessageBubble.scss';

const MessageBubble = ({message, position, settings}) => {
  const leftColor = settings.messageBubble.leftBubbleColor;
  const rightColor = settings.messageBubble.rightBubbleColor;

  return (
    <div
      style={{backgroundColor: position === 'left' ? leftColor : rightColor}}
      className={classnames('message-bubble', position)}>
      {message}
    </div>
  );
};

MessageBubble.propTypes = {
  message: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right']),
  settings: settingsPropType
};

export default MessageBubble;
