import React from 'react';
import Headroom from 'react-headroom';

export default class SiteHeaderCreator extends React.Component {
	render() {
		return (
			<Headroom>
				<button onClick={this.scrollToElement.bind(this, 'Carousel')}>
					Showreel
				</button>
				<button onClick={this.scrollToElement.bind(this, 'Projects')}>
					Projects
				</button>
				<button onClick={this.scrollToElement.bind(this, 'Languages')}>
					Languages
				</button>
			</Headroom>
		);
	}

	scrollToElement(name) {
		this.props.a_scrollToElement(name);
	}
}
