import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomeScreen from '../view/homescreen/HomeScreen';

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/homeUser" component={HomeScreen} />
      </div>
    );
  }
}

export default RouterURL;
