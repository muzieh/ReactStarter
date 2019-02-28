import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from '../ArticleList';


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
		store: {
			lookupAuthor: jest.fn(() => ({})),

		},
	};

	it('renders correctly', () => {
		const tree = renderer.create(
			<ArticleList {...testProps} />
		).toJSON();

		expect(tree.length).toBe(2);
		expect(tree).toMatchSnapshot();
	});
});