import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Form from "../Form/Form";
import { connect } from 'react-redux';
import Review from "../Review/Review";
import Success from "../Success/Success";
import AdminList from "../AdminList/AdminList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/"  render={() => <Form next="/understanding" reducer="SET_FEELING" question="How are you feeling today?" />}></Route>
          <Route exact path="/understanding" render={() => <Form prev="/" next="/support" reducer="SET_UNDERSTANDING" question="How well are you understanding the content?" />}></Route>
          <Route exact path="/support" render={() => <Form prev="/understanding" next="/comments" reducer="SET_SUPPORT" question="How well are you being supported?" />}></Route>
          <Route exact path="/comments" render={() => <Form prev="/support" next="/review" reducer="SET_COMMENTS" question="Any comments you want to leave?" />}></Route>
          <Route exact path="/review" component={Review}></Route>
          <Route exact path="/success" component={Success}></Route>
          <Route exact path="/admin" component={AdminList}></Route>
          <br />
        </div>
      </Router>
    );
  }
}

const maxReduxToProps = (redux => redux);

export default connect(maxReduxToProps)(App);
