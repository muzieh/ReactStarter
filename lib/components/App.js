import React from 'react';
import DataApi from '../DataApi';
import ArticleList from './ArticleList';

import { data } from '../testData';

const api = new DataApi(data);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: api.getArticles(),
			authors: api.getAuthors(),
		};
	}

	articleActions = {
		lookupAuthor: authorId => this.state.authors[authorId],
	};

	render() {
		const { articles } = this.state;
		return (
			<ArticleList
				articles={articles}
				articleActions={this.articleActions}
			/>
		);
	}
}

export default App;
