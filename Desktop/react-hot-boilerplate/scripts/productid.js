import React from 'react';

import ReactBootstrap from 'react-bootstrap';


export default class ProductId extends React.Component {
	render() {
	var name = this.props.name;	
		return (
			<p> {name} </p>

			);
	}
};