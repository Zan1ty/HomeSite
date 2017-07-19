import React from 'react';
import Carousel from './carousel';
import SiteHeader from './siteHeader';
import Projects from './projects';
import Footer from './footer';
import Languages from './languages';
import { languageArr, portfolioItems, projects } from '../data/data';
import { scroller } from 'react-scroll';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { portfolioItems, languageArr, projects };
	}

	render() {
		return (
			<div>
				<SiteHeader a_scrollToElement={this.a_scrollToElement.bind(this)} />
				<Carousel portfolioItems={this.state.portfolioItems} />
				<Projects projects={this.state.projects} />
				<Languages languageArr={this.state.languageArr} />
				<Footer />
			</div>
		);
	}

	a_scrollToElement(name) {
		scroller.scrollTo(name);
	}
}
