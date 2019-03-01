import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ArticleList from '../ArticleList';
import Article from '../Article';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {
	const testProps = {
		articles: {
			a: {
				id: 'a',
				date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)',
				title: 'title1',
				body: 'body 1',
			},
			b: {
				id: 'b',
				date: 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)',
				title: 'title2',
				body: 'body 2',
			},
		},
	};

	it('renders correctly', () => {
		const wrapper = shallow(
			<ArticleList
				{...testProps}
			/>
		);

		expect(wrapper.find(Article)).toHaveLength(2);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
		expect(1).toBe(1);
	});
});
