import React from 'react';
import { shallow } from 'enzyme';
import {defaultSettings} from 'src/utils/settings';
import MessageBubble from 'src/components/MessageArea/MessageBubble/MessageBubble';

describe('<MessageBubble />', () => {

  const settings =  defaultSettings;


  it('should render', () => {
    expect(shallow(<MessageBubble settings={settings}/>)).toHaveLength(1);
  });

  it('should render proper bubble colors', () => {
    let wrapper = shallow(<MessageBubble position='left' settings={settings} />);
    expect(wrapper.find('.message-bubble').getElement().props.style.backgroundColor).toEqual('#CFD8EA');
    wrapper = shallow(<MessageBubble position='right' settings={settings} />);
    expect(wrapper.find('.message-bubble').getElement().props.style.backgroundColor).toEqual('#F5F7F9');
  });

});
