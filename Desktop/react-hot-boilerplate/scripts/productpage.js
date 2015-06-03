import React from 'react';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
Page.contextTypes = {router: React.PropTypes.func.isRequired };

import ReactBootstrap from 'react-bootstrap';


export default class ProductPage extends React.Component {





  onChange() {
    this.context.router.replaceWith('/');
  }


LoginPage.contextTypes = {
  router: React.PropTypes.func.isRequired
};

};