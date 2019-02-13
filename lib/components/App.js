import React from 'react';
import ArticleList from './ArticleList';

class App extends React.Component {
	state = this.props.store.getState();

	articleActions = {
		lookupAuthor: authorId => this.state.authors[authorId],
	}

	render() {
		console.log(this.state);
		const { articles } = this.state;
		return (
			<ArticleList
				articles={articles}
				store={this.props.store}
			/>
		);
	}
}

export default App;
