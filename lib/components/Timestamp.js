import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';


class Timestamp extends React.Component {
	render() {
		const { currentTime } = this.props;
		return (
			<div>
				{currentTime.toString()}
			</div>
		);
	}
}

Timestamp.propTypes = {
	currentTime: PropTypes.instanceOf(Date),
};

function extraProps(store) {
	return {
		currentTime: store.getState().currentTime,
	};
}

export default storeProvider(extraProps)(Timestamp);
