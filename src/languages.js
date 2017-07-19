import React from 'react';
import LanguageItem from './languageitem';
import { map } from 'lodash';
import { Element } from 'react-scroll';

export default class Languages extends React.Component {
	rendLanguages() {
		return map(this.props.languageArr, (lang, index) =>
			<LanguageItem key={index} {...lang} />
		);
	}

	render() {
		return (
			<Element name="Languages">
				<div>
					{this.rendLanguages()}
				</div>
			</Element>
		);
	}
}
