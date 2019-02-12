import React from 'react';
import Article from './Article';

const mapToArticle = (articles, authors) => {
	return (
		Object.values(articles).map(article => {
			return <Article
				key={article.id}
				article={article}
				author={authors[article.authorId]}
			/>;
		})
	)
};

const ArticleList = (props) => {
	const { articles, authors } = props;
	return <div>{mapToArticle(articles, authors)}</div>;
};


export default ArticleList;
