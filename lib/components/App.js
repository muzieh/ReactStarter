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

	render() {
		const { articles, authors } = this.state;
		return (
			<ArticleList
				articles={articles}
				authors={authors}
			/>
		);
	}
}

export default App;
