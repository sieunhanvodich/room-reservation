import React, { Component } from 'react';
import { Route } from "react-router-dom";
import BookingScreen from '../view/bookingScreen/BookingScreen';

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/booking-screen" component={BookingScreen} />
      </div>
    );
  }
}

export default RouterURL;
