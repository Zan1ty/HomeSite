import React from 'react';
import {Carousel, onChange, onClickItem, onClickThumb} from 'react-responsive-carousel';
import { map } from 'lodash';
import C_Item from './c_item';

export default class PFCarousel extends React.Component
{
    carouselItems()
    {
      return map(this.props.portfolioItems, (item, index) => <C_Item key={index}
      {...item}/>);
    }

    render()
    {
      return(
          <Carousel axis="horizontal" showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} showThumbs={false}>
          {this.carouselItems()}
          </Carousel>
      );
    }
}
