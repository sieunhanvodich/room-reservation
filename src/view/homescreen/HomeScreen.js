import React, { Component } from 'react';
import "./HomeScreen.css"
import HeaderHomeScreen from '../../components/HeaderHomeScreen';
class HomeScreen extends Component {
  render() {
    return (
      <div className="container">
        <HeaderHomeScreen />
      </div>
    )
  }
}

export default HomeScreen;
