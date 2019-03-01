import React from 'react';
//import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow, mount, render } from 'enzyme';
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
		console.log(wrapper);

		expect(wrapper.find(Article)).toHaveLength(2);
		expect(wrapper).toMatchSnapshot();
		expect(1).toBe(1);
		//expect(tree.length).toBe(2);
		//expect(tree).toMatchSnapshot();
	});
});