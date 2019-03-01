import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
	article: {
		paddingBottom: 10,
		borderBottomStyle: 'solid',
		borderBottomColor: '#aaa',
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	title: {
		fontWeight: 'bold',
	},
	date: {
		fontSize: '0.85em',
		color: '#888',
	},
	author: {
		padding: '10px 0',
	},
	body: {
		paddingLeft: 20,
	},
};

const dateDisplay = dateString => new Date(dateString).toDateString();


const Article = props => {
	const { article, author } = props;
	article.data = null;
	return (
		<div style={styles.article}>
			<div style={styles.title}>{article.title}</div>
			<div style={styles.date}>{dateDisplay(article.date)}</div>
			<div style={styles.author}>
				<a href={author.website}>
					{author.firstName}
					{author.lastName}
				</a>
			</div>
			<div style={styles.body}>{article.body}</div>
		</div>
	);
};

/*
const ArticleContainer = (props, { store }) => {
	return <Article {...props} store={store} />;
};

ArticleContainer.contextTypes = {
	store: PropTypes.object,
};
*/

Article.propTypes = {
	article: PropTypes.shape({
		date: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	}),
	author: PropTypes.object,
	store: PropTypes.object
};

function extraProps(store, oryginalProps) {
	return {
		author: store.lookupAuthor(oryginalProps.article.authorId),
	};
}

export default storeProvider(extraProps)(Article);
