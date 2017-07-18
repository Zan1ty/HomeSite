import React from 'react';

export default class LanguageItem extends React.Component
{
  render(){
    return(
      <div>
      <h1>{this.props.lang}</h1>
      <p>{this.props.lvl}</p>
      </div>
    );
  }
}
