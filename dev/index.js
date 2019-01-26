import React from 'react';
import ReactDom from 'react-dom';
import ReactChatty from '../src/components/ReactChatty';

const messages = [
	{
		msg: 'Hey I have a question for you.',
		position: 'left'
	}, {
		msg: 'Sure How can I help you ?',
		position: 'right'
	}, {
		msg: 'Hey I have a question for you.',
		position: 'left'
	}, {
		msg: 'Sure How can I help you ?',
		position: 'right'
	}, {
		msg: 'Hey I have a question for you.',
		position: 'left'
	}, {
		msg: 'Sure How can I help you ?',
		position: 'right'
	}, {
		msg: 'Hey I have a question for you.',
		position: 'left'
	}, {
		msg: 'Sure How can I help you ?',
		position: 'right'
	}
];

ReactDom.render(<ReactChatty messages={messages}/>, document.getElementById('container'));