import React from 'react';
import SendIcon from '../SendIcon';

import './SendButton.style.scss';

const SendButton = () => <button className='send-button'>
  <SendIcon/>
</button>;

SendButton.propTypes = {};

export default SendButton;
