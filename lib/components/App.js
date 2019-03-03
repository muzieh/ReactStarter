import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import pickBy from 'lodash.pickby';

class App extends React.Component {
	componentDidMount() {
		this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
		this.props.store.startClock();
	}

	componentWillUnmount() {
		this.props.store.unsubscribe(this.subscriptionId);
	}

	onStoreChange = () => {
		this.setState(this.props.store.getState());
	}
		
	static childContextTypes = {
		store: PropTypes.object,
	}

	getChildContext() {
		return {
			store: this.props.store,
		}
	}

	state = this.props.store.getState();

	articleActions = {
		lookupAuthor: authorId => this.state.authors[authorId],
	}
	render() {
		let {articles, searchTerm, currentTime} = this.state;
		if(searchTerm) {
			articles = pickBy(articles, (value, key) => {
				return value.title.match(searchTerm) || value.body.match(searchTerm);
			});
		}
			
		return (
			<div>
				<SearchBar doSearch={this.props.store.setSearchTerm}></SearchBar>
				<ArticleList articles={articles} />
				<Timestamp></Timestamp>
			</div>
		);
	}
}

export default App;
