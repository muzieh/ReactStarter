import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from '../ArticleList';


describe('ArticleList', () => {
	const testProps = {
		articles: {
			a: { id: 'a' },
			b: { id: 'b' },
			c: { id: 'c' },
		},
		store: {
			lookupAuthor: jest.fn(() => ({})),
		},
	};

	it('renders correctly', () => {
		const tree = renderer.create(
			<ArticleList {...testProps} />
		).toJSON();

		expect(tree.length).toBe(3);
		expect(tree).toMatchSnapshot();
	});
});
