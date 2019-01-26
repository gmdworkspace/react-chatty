import React from 'react';
import { shallow } from 'enzyme';
import MessageArea from 'src/components/MessageArea/MessageArea';

describe('<MessageArea />', () => {

  it('should render', () => {
    expect(shallow(<MessageArea />)).toHaveLength(1);
  });

  it('should render MessageBubble', () => {
    const messages = [{msg: 'test 2', position: 'left'}, {msg: 'test 2', position: 'right'}];
    const wrapper = shallow(<MessageArea messages={messages} />);
    expect(wrapper.find('MessageBubble')).toHaveLength(2);
  });

});
