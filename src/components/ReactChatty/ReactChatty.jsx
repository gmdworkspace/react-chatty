import React from 'react';
import MessageArea from 'src/components/MessageArea/MessageArea';
import TypingArea from 'src/components/TypingArea/TypingArea';
import {settingsPropType} from 'src/utils/proptypes-mapper';
import {defaultSettings} from 'src/utils/settings';

import './ReactChatty.scss';

class ReactChatty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages
    };
    this.messageArea = React.createRef();
    this.addToMessageArea = this.addToMessageArea.bind(this);
  }

  addToMessageArea(message) {
    const newMessages = this.state.messages;
    newMessages.push(message);
    this.setState({messages: newMessages});
  }

  render() {
    const {settings} = this.props;
    return (
      <div className='react-chatty'>
        <MessageArea messages={this.state.messages} settings={settings} reference={this.messageArea}/>
        <TypingArea
          addToMessageArea={this.addToMessageArea}
          settings={settings}/>
      </div>
    );
  }
}

ReactChatty.propTypes = {
  messages: MessageArea.propTypes.messages,
  settings: settingsPropType
};

ReactChatty.defaultProps = {
  settings: defaultSettings
};

export default ReactChatty;
