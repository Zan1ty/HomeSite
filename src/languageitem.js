import React from 'react';

export default class LanguageItem extends React.Component {
	render() {
		return (
			<div>
				<h3>
					{this.props.lang}
				</h3>
				<p>
					{this.props.lvl}
				</p>
			</div>
		);
	}
}
