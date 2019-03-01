import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
	state = {
		searchTerm: '' 
	}
	doSearch = debounce( () => {
		console.log(this.state.searchTerm);
		this.props.doSearch(this.state.searchTerm);

	}, 300)

	handleSearch = (event) => {
		this.setState({
			searchTerm: event.target.value
		}, () => {
			this.doSearch();
		});
	}
	render() {
		return <input
			type="search" 
			placeholder="search"
			onChange={this.handleSearch}
		/>
	}
}

export default SearchBar;