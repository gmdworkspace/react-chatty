import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ReactChatty from 'src/components/ReactChatty/ReactChatty';

describe('<ReactChatty />', () => {

  it('should render', () => {
    expect(shallow(<ReactChatty />)).to.have.length(1);
  });

});
