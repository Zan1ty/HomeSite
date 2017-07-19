import React from 'react';
import {
	Carousel,
	onChange,
	onClickItem,
	onClickThumb
} from 'react-responsive-carousel';
import { map } from 'lodash';
import C_Item from './c_item';
import { Element } from 'react-scroll';

export default class PFCarousel extends React.Component {
	//Map all portfolioItems items to populate carousel
	carouselItems() {
		return map(this.props.portfolioItems, (item, index) =>
			<C_Item key={index} {...item} />
		);
	}

	render() {
		return (
			//Setup carousel
			<Element name="Carousel">
				<Carousel
					axis="horizontal"
					showArrows={true}
					onChange={onChange}
					onClickItem={onClickItem}
					onClickThumb={onClickThumb}
					showThumbs={false}
				>
					{this.carouselItems()}
				</Carousel>
			</Element>
		);
	}
}
