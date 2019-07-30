import React, { Component } from 'react';
import "./HomeScreen.css"
import ContentHomeUser from '../../components/ContentHomeUser/ContentHomeUser';
class HomeScreen extends Component {
  render() {
    return (
      <div className="container">
        <ContentHomeUser />
      </div>
    )
  }
}

export default HomeScreen;
