import React from 'react';
import PropTypes from 'prop-types';
import SendButton from 'src/components/TypingArea/SendButton/SendButton';
import {settingsPropType} from 'src/utils/proptypes-mapper';

import './TypingArea.style.scss';

class TypingArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textArea: ''
    };
    this.textAreaRef = React.createRef();
    this.captureEnterPress = this.captureEnterPress.bind(this);
    this.clearText = this.clearText.bind(this);
    this.textOnchange = this.textOnchange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  captureEnterPress(e) {
    if (window.event.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage() {
    const {onMessageSend, addToMessageArea, settings} = this.props;
    const message = {
      msg: this.state.textArea,
      position: 'right',
      settings
    };
    addToMessageArea(message);
    if(onMessageSend)
      onMessageSend(this.state.textArea);
    this.clearText();
  }

  clearText() {
    this.setState({textArea: ''});
  }

  textOnchange(e) {
    this.setState({textArea: e.target.value});
  }

  render() {
    const {placeHolder} = this.props;
    return <div className='typing-area'>
      <textarea
        ref={this.textAreaRef}
        value={this.state.textArea}
        placeholder={placeHolder}
        onKeyPress={this.captureEnterPress}
        onChange={this.textOnchange}
      />
      <SendButton sendMessage={this.sendMessage}/>
    </div>;
  }

}

TypingArea.propTypes = {
  placeHolder: PropTypes.string,
  onMessageSend: PropTypes.func,
  addToMessageArea: PropTypes.func,
  settings: settingsPropType
};

TypingArea.defaultProps = {
  placeHolder: 'Start typing...'

};

export default TypingArea;
