/* eslint arrow-body-style: ["off", "always"] */
import React from 'react';
import Article from './Article';

const ArticleList = props => {
	const { articles, articleActions } = props;
	return (
		Object.values(articles).map(article => {
			return (
				<Article
					key={article.id}
					article={article}
					actions={articleActions}
				/>
			);
		})
	);
};


export default ArticleList;
