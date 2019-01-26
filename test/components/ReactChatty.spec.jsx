import React from 'react';
import { shallow } from 'enzyme';

import ReactChatty from 'src/components/ReactChatty/ReactChatty';

describe('<ReactChatty />', () => {

  it('should render', () => {
    expect(shallow(<ReactChatty />)).toHaveLength(1);
  });

});
