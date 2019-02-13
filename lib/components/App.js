import React from 'react';
import StateApi from 'StateApi';
import ArticleList from './ArticleList';

import { data } from 'testData';

const api = new StateApi(data);

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
