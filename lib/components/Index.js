import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Board = (props) => {
	const { content } = props;
	return <div>{content}</div>;
};

Board.propTypes = {
	content: PropTypes.string.isRequired,
};


class App extends React.Component {
	state = {
		answer: 42,
		title: "title",
	};

	asyncFunc = () => {
		return Promise.resolve(47);
	}

	async componentDidMount() {
		this.setState({
			answer: await this.asyncFunc()
		});
	}

	render() {
		const { title, answer } = this.state;
		return (
			<div>
				<h2>From R</h2>
				<Board content={answer} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
);
