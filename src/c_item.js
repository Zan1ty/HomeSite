import React from 'react';

export default class C_Item extends React.Component
{
  renderC_Item()
  {
    return(
      <div>
        <img src={this.props.img} />
        <p className="legend">{this.props.descrip}</p>
      </div>
    );
  }

render()
{
  return(
    <div>{this.renderC_Item()}</div>
  );
}

}
