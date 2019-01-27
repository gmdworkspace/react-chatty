import PropTypes from 'prop-types';

export const settingsPropType = PropTypes.shape({
  messageBubble: PropTypes.shape({
    leftBubbleColor: PropTypes.string,
    rightBubbleColor: PropTypes.string
  })
});