import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import DetailRoom from './DetailRoom';
import axios from 'axios';
import moment from 'moment';
import { reverse } from 'dns';
import control from '../../services/UserService'

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      roomName: [],
      bookInfos: [],
      key: 'IOT',
      timearr: [
        {
          start: '20:00',
          end: '20:30',
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
          start: '16:00',
          end: '16:30',
          type: ''
        },
      ]
    }

  }

  componentDidMount() {

    control.getDataDate(this.props.date).then((res) => this.setState({ bookInfos: res }, () => {
     
     if(this.state.bookInfos.length === 0){
        this.state.status = "true"
     }  else this.state.status = "false"
    
      for(let i=0; i<this.state.bookInfos.length; i++){
        var time = moment(this.state.bookInfos[i].from, "HH:mm")
        var status= []
        for(let j=0; j<this.state.timearr.length; j++){
          var startTime = moment(this.state.timearr[j].start, "HH:mm")
          var endTime = moment(this.state.timearr[j].end, "HH:mm")
          var compare = time.isBetween(startTime, endTime, null, '[]')
          if(compare == true ){
          this.state.timearr[j].type = this.state.bookInfos[i].book_type_id.name
          }
        }
      }
    }));

    axios.get('http://localhost:3000/roomlist')
      .then(res => {
        const roomName = res.data.roomList;
        this.setState({ roomName })
    })

    //     // const a = this.state.timearr
    //     // a[0].type = 'red'
    //     // this.setState({ timearr: a})
    //   })
  }

  onSelectTab = (key) => {
    this.setState({
      key
    })
  }


  render() {
      console.log(this.state.status)
      return (
        // <Tabs id="controlled-tab-example"  activeKey={this.state.key} onSelect={key => this.onSelectTab(key)}>  
        <Tabs id="controlled-tab-example" defaultActiveKey="IOT">
          {this.state.roomName.map((value, index) => {
            return (
              <Tab eventKey={value.name} title={value.name}>
                <DetailRoom id="name" data={value} timearr={this.state.timearr} />
              </Tab>
            )
          })}
        </Tabs>
      )
    
    // else {
      return (
        <Tabs id="controlled-tab-example" defaultActiveKey="IOT">
          {this.state.roomName.map((value, index) => {
            return (
              <Tab eventKey={value.name} title={value.name}>
                {this.state.bookInfos.map((info, infoindex) => {
                  return (
                    <DetailRoom id="name" data={value} timearr={this.state.timearr} />
                  )
                })}

              </Tab>
            )
          })}
        </Tabs>
      )
    // };
  }
}

export default Contents;
