import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Form from "../Form/Form";
import {connect} from 'react-redux';
import Review from "../Review/Review";
import Success from "../Success/Success";
import Admin from "../Admin/Admin";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route exact path="/" render={() => <Form next="/understanding" reducer="SET_FEELING" question="How are you feeling today?" />}></Route>
        <Route exact path="/understanding" render={() => <Form next="/support" reducer="SET_UNDERSTANDING" question="How well are you understanding the content?" />}></Route>
        <Route exact path="/support" render={() => <Form next="/comments" reducer="SET_SUPPORT" question="How well are you being supported?" />}></Route>
        <Route exact path="/comments" render={() => <Form next="/review" reducer="SET_COMMENTS" question="Any comments you want to leave?" />}></Route>
        <Route exact path="/review" component={Review}></Route>
        <Route exact path="/success" component={Success}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <br/>
      </div>
      <pre>
        {JSON.stringify(this.props,null,2)}
      </pre>
      </Router>
    );
  }
}

const maxReduxToProps = (redux => redux);

export default connect(maxReduxToProps)(App);
