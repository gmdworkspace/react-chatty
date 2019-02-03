import React from 'react';
import PropTypes from 'prop-types';
import MessageBubble from './MessageBubble';
import {settingsPropType} from 'src/utils/proptypes-mapper';

import './MessageArea.style.scss';

class MessageArea extends React.Component {

  componentDidMount() {
    this.scrollToLatest();
  }

  componentDidUpdate() {
    this.scrollToLatest();
  }

  scrollToLatest() {
    this.messageArea.scrollTop = this.messageArea.scrollHeight;
  }

  render() {
    const {messages, settings} = this.props;
    return (
      <div className='message-area' ref={(ref) => this.messageArea = ref}>
        {
          messages.map((message, i) => <MessageBubble
            key={i}
            message={message.msg}
            position={message.position}
            settings={settings}
          />)
        }
      </div>
    );
  }
}

MessageArea.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MessageBubble.propTypes)),
  settings: settingsPropType
};

MessageArea.defaultProps = {
  messages: []
};

export default MessageArea;
