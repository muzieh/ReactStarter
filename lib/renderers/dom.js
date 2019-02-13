import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from 'components/App';

const Board = props => {
	const { content } = props;
	return <div>{content}</div>;
};

Board.propTypes = {
	content: PropTypes.string.isRequired,
};


ReactDOM.render(
	<App initialData={window.initialData} />,
	document.getElementById('root'),
);
