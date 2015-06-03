import React from 'react';
import NavBar from './navbar';
import FrontPage from './frontpage';
import Blog from './blog';
import Shop from './shop';
import ProductPage from './productpage';
import ProductId from './productid';

//import App from './App';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
import ReactBootstrap from 'react-bootstrap';
var {Button, Panel }=ReactBootstrap;

class SubComponent extends React.Component {
      
      render() {
        var message=this.props.imessage;
        return (
          <li > {message} <button onClick={this.props.onClick}> x</button> </li>
          );
      }
    };


class MessageBox extends React.Component {


      changeHandler() {
        var newVal = this.refs.rex.getValue();
        this.setState({
          val: newVal
        });
      }

      handleDelete(message) {
        this.state.messages.splice(this.state.messages.indexOf(message), 1);
        this.setState({messages: this.state.messages });
      }

      handleAdd(e){
        e.preventDefault();
        var text = this.refs.rex.getValue();
        var texts = this.state.messages.concat([text]);
        this.setState({
          messages: texts,
          val: " "
        });
      }      

      constructor(props) {
        super(props);
        this.state = {messages: [],
                      val: " "
        };
      }


  render() {
          var Button = ReactBootstrap.Button;
          var that = this;
          var count=0;
          
          var subMessage = this.state.messages.map(function(imessage,index) {
            count++;
            return (<SubComponent onClick={that.handleDelete.bind(that, imessage)} imessage= {imessage} key={count}></SubComponent>
              );
          });    
    return(

              <div>
              <ReactBootstrap.Input 
                type="text" 
                ref="rex" 
                value={this.state.val} 
                onChange={this.changeHandler.bind(this)} 
                placeholder={this.props.defaultText} 
                autofocus />
              <Button bsStyle='success' onClick={this.handleAdd.bind(this)}>Add</Button>
              <br/>
              <Button bsStyle='warning'>Warning</Button>
              <ul>
              { subMessage }
              </ul>
            </div> );      
      
  }
};


class App extends React.Component{

    constructor(props) {
    super(props);
    this.state = { 
          data: [{name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike1.jpg"},
          {name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike2.jpg"},
          {name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike3.jpg"},
          {name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike4.jpg"},
          {name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike4.jpg"},
          {name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike1.jpg"},
          {name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike2.jpg"},
          {name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike3.jpg"},
          {name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike4.jpg"},
          {name: "lunarglide", price: "1200,-", 
          category: "Womens running shoes", img: "/images/nike4.jpg"}
          ]
        };
      }

    showProductHandler(e) {
        <Route name="ProductId" path={e.name} handler={ProductId}/>
      }

    render() {
	  return (
      <div className="App">
         <NavBar />
         <div className='container'x>
           <RouteHandler/>
         </div>
        </div>
    )}
  }



var routes = (
    <Route handler={App} name='App' path='/'>
        <Route handler={Blog} name='Blog' path='/blog'/>
        <Route handler={FrontPage} name='FrontPage' path='/frontpage' />
        <Route handler={Shop} name='Shop' path='/shop' data={this.state.data.bind(this)} >
            <Route handler={ProductPage} name='ProductPage' path='/productpage' data={this.state.data} />
        </Route>
    </Route>

);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('root'));
});

