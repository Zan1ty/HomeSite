import React from 'react';
import LanguageItem from './languageitem';
import { map } from 'lodash';

export default class Languages extends React.Component
{

  rendLanguages()
  {
    return map(this.props.languageArr, (lang, index) => <LanguageItem key={index}
    {...lang}/>);
  }

  render()
  {
    return(
      <div>
      {this.rendLanguages()}
      </div>
    );
  }
}
