import React from 'react';
import ArticleList from './ArticleList';

class App extends React.Component {
	state = this.props.store.getState();
/*	
	{
		articles: this.props.initialData.articles,
		authors: this.props.initialData.authors,
	}
	*/

	articleActions = {
		lookupAuthor: authorId => this.state.authors[authorId],
	}

	render() {
		console.log(this.state);
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
