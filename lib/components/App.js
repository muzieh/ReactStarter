import React from 'react';
import StateApi from 'stateApi';
import { data } from 'testData';
import ArticleList from './ArticleList';
import axios from 'axios';


const api = new StateApi(data);

class App extends React.Component {
	state = {
		articles: this.props.initialData.articles,
		authors: this.props.initialData.authors,
	}

	articleActions = {
		lookupAuthor: authorId => this.state.authors[authorId],
	}

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
