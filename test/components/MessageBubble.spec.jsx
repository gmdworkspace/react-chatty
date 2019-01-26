import React from 'react';
import { shallow } from 'enzyme';

import MessageBubble from 'src/components/MessageArea/MessageBubble/MessageBubble';

describe('<MessageBubble />', () => {

  it('should render', () => {
    expect(shallow(<MessageBubble />)).toHaveLength(1);
  });

});
