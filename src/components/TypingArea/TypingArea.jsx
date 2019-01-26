import React from 'react';
import './TypingArea.style.scss';
import SendButton from 'src/components/TypingArea/SendButton/SendButton';

const TypingArea = () => <div className='typing-area'>
  <textarea />
  <SendButton/>
</div>;

TypingArea.propTypes = {};

export default TypingArea;
