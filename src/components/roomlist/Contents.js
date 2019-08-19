import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import DetailRoom from './DetailRoom';
import axios from 'axios';

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      key: 'IOT'
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/roomlist')
      .then(res => {
        const info = res.data.roomList;
        this.setState({ info });
        console.log(this.state.info)
      })
  }

  onSelectTab = (key) => {
    this.setState({
      key
    })
  }


  render() {
    return (
      <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.onSelectTab(key)}>
        {this.state.info.map((value, index) => {
          return (
            <Tab eventKey={value.name} title={value.name}>
              <DetailRoom id="name" data={value} />

            </Tab>
          )
        })}
      </Tabs>
    );
  }
}

export default Contents;
