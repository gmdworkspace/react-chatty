import React from 'react';
import { shallow } from 'enzyme';

import SendButton from 'src/components/TypingArea/SendButton/SendButton';

describe('<SendButton />', () => {

  it('should render', () => {
    expect(shallow(<SendButton />)).toHaveLength(1);
  });

});
