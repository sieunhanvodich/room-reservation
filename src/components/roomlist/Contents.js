import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import DetailRoom from './DetailRoom';
import axios from 'axios';
import moment from 'moment';

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      key: 'IOT',
      timearr: [
        {
          start: '9:30',
          end: '10:00',
          type: ''
        },
        {
          start: '10:00',
          end: '10:30',
          type: ''
        },
        {
          start: '10:30',
          end: '11:00',
          type: ''
        },
        {
          start: '11:00',
          end: '11:30',
          type: ''
        },
        {
          start: '11:30',
          end: '12:00',
          type: ''
        },
        {
          start: '12:00',
          end: '12:30',
          type: ''
        },
        {
          start: '12:30',
          end: '13:00',
          type: ''
        },
        {
          start: '13:00',
          end: '13:30',
          type: ''
        },
        {
          start: '13:30',
          end: '14:00',
          type: ''
        },
        {
          start: '14:00',
          end: '14:30',
          type: ''
        },
      ]
    }
    
  }

  componentDidMount() {
    axios.get('http://localhost:3000/roomlist')
      .then(res => {
        const info = res.data.bookInfos;
      
        this.setState({ info });
        console.log(info)
        
      
        // const a = this.state.timearr
        // a[0].type = 'red'
        // this.setState({ timearr: a})
      })
  }
  
  onSelectTab = (key) => {
    this.setState({
      key
    })
  }
  
  
  render() {
    return (
      <Tabs id="controlled-tab-example"  activeKey={this.state.key} onSelect={key => this.onSelectTab(key)}> 
        {this.state.info.map((value, index) => { 
          return (
            <Tab eventKey={value.room_id.name} title={value.room_id.name}>
              
              <DetailRoom id="name" data={value.room_id} timearr={this.state.timearr} />
              
            </Tab>
          )
        })}
      </Tabs>
    );
  }
}

export default Contents;
