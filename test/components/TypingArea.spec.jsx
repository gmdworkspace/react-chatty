import React from 'react';
import { shallow } from 'enzyme';

import TypingArea from 'src/components/TypingArea/TypingArea';

describe('<TypingArea />', () => {

  it('should render', () => {
    expect(shallow(<TypingArea />)).toHaveLength(1);
  });

});
