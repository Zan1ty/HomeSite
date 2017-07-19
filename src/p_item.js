import React from 'react';

export default class P_Item extends React.Component {
	render() {
		return (
			<div>
				<h3>
					{this.props.name}
				</h3>
				<p>
					{this.props.link}
				</p>
				<p>
					{this.props.videoLink}
				</p>
				<p>
					{this.props.description}
				</p>
			</div>
		);
	}
}
