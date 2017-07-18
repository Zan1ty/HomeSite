import React from 'react';
import Carousel from './carousel';
import SiteHeader from './siteHeader';
import Languages from './languages';

const portfolioItems = [
  {
    item: 'Trippy Viking',
    img: './assets/1.jpeg',
    descrip: 'Firetail Games first production'
  },
  {
    item: 'Final Tale',
    img: './assets/2.jpeg',
    descrip: 'Frozen mobile game'
  },
  {
    item: 'Kalsarikänni',
    img: './assets/3.jpeg',
    descrip: 'Firetail Games latest game'
  }
];

const languageArr = [
  {
    lang: 'C#',
    lvl: 'strong'
  },
  {
    lang: 'javascript',
    lvl: 'intermediate'
  },
  {
    lang: 'C++',
    lvl: 'basics'
  }
];

export default class App extends React.Component
{
  constructor(props){
    super(props);
    this.state = { portfolioItems, languageArr };
  };

  render() {
    return(
      <div>
      <SiteHeader />
      <Carousel
      portfolioItems={this.state.portfolioItems}
      />
      <Languages
      languageArr={this.state.languageArr}
      />
      </div>
    );
  };


}
