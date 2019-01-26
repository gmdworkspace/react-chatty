import React from 'react';
import { shallow } from 'enzyme';

import SendIcon from 'src/components/TypingArea/SendIcon/SendIcon';

describe('<SendIcon />', () => {

  it('should render', () => {
    expect(shallow(<SendIcon />)).toHaveLength(1);
  });

});
