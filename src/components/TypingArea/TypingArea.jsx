import React from 'react';
import PropTypes from 'prop-types';
import SendButton from 'src/components/TypingArea/SendButton/SendButton';

import './TypingArea.style.scss';

const TypingArea = ({placeHolder}) => <div className='typing-area'>
  <textarea placeholder={placeHolder}/>
  <SendButton/>
</div>;

TypingArea.propTypes = {
  placeHolder: PropTypes.string
};

TypingArea.defaultProps = {
  placeHolder: 'Ask your questions here'

};

export default TypingArea;
