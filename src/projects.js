import React from 'react';
import { map } from 'lodash';
import { Element } from 'react-scroll';
import P_Item from './p_item';

export default class Projects extends React.Component {
	projectItems() {
		return map(this.props.projects, (item, index) =>
			<P_Item key={index} {...item} />
		);
	}

	render() {
		return (
			<Element name="Projects">
				<div>
					{this.projectItems()}
				</div>
			</Element>
		);
	}
}
