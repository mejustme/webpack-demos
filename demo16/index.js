import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

require('./app.css');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/app">Dashboard</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
          Logged in as Jane
        </header>
        {this.props.children} /*�����ģ�鶯̬���������*/
      </div>
    );
  }
});

var Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <p>Dashboard</p>
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function () {
    return (
      <div>
        <p>Inbox</p>
      </div>
    );
  }
});

var Calendar = React.createClass({
  getInitialState: function(){
    return {
      name : "xxxx"
    }
  },
  doClick: function(){
    this.setState({name:"mejustme"})
  },
  render: function () {
    return (
      <div onClick={this.doClick}>
        <p>{this.state.name}</p>
      </div>
    );
  }
});

//let history = createBrowserHistory(); ����history.pushState()�ı�URL����ˢ�¡�Ĭ��ͨ��#hash�ı�
/*<Router history={history}>*/
//http://localhost:63342/webpack-demos/demo16/index.html#/inbox?_k=t4flas
/*window.location.hash = newHash, with no place to store location state.
But, we want all histories to be able to use location state, so we shim it by creating a unique key for each location and then store that state in session storage.*/
render((
  <Router>
    <Route path="/" component={App}> {/*this.props.children ���������*/}
      <IndexRoute component={Inbox}/> {/*Ĭ���Ǹ�ģ��*/}
      <Route path="app" component={Dashboard}/> {/*��Ӧ���Ǹ����*/}
      <Route path="inbox" component={Inbox}/>
      <Route path="calendar" component={Calendar}/>
      <Route path="*" component={Dashboard}/>
    </Route>
  </Router>
), document.body);
