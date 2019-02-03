import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '../SendIcon';

import './SendButton.style.scss';

const SendButton = ({sendMessage}) => <button className='send-button' onClick={sendMessage}>
  <SendIcon/>
</button>;

SendButton.propTypes = {
  sendMessage: PropTypes.func
};

export default SendButton;
