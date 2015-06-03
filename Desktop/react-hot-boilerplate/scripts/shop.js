import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Col, Grid, Row, Button, Thumbnail } = ReactBootstrap;

export default class Shop extends React.Component {

	render() {	
		var count = 0;
		var data =this.props.data;
		return (
			<div>
			<Grid >
				<Row> 
			    {data.map(function(dict, index) {
			    	count++;
			    	return (
			    		<Col xs={6} md={3}>
			    			<div onClick={this.showProductHandler} >
			    			<Thumbnail href='#' alt='171x180' src={dict.img} key={count} />
			    			<b>{dict.name}</b>
			    			<span>{dict.category}</span>
			    			<span>{dict.price}</span>
			    			</div>
			    		</Col>		
			    		);
			    })}
				</Row>    
			</Grid>
			<br/>
			<Button id="vismer"bsStyle='primary' onClick={this.showMoreHandler	}>Vis mer </Button>
			<br/>
			<br/>
			</div>
			);
		}
};



