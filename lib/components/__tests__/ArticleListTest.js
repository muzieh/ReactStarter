import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from '../ArticleList';


describe('ArticleList', () => {
	it('renders correctly', () => {
		renderer.create(
			<ArticleList />,
		);
	});
});
