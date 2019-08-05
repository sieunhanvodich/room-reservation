import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import DetailRoom from './DetailRoom';
class Contents extends Component {
  render() {
    function ControlledTabs() {
      const [key, setKey] = useState('home');
      return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
          <Tab eventKey="home" title="IOT">
            <DetailRoom id="iot" />
          </Tab>
          <Tab eventKey="1" title="IOS">
            <DetailRoom  id="ios"/>
          </Tab>
          <Tab eventKey="2" title="AWS">
            <DetailRoom id="aws"/>
          </Tab>
          <Tab eventKey="3" title="WINDOWS">
            <DetailRoom id="windows"/>
          </Tab>
          <Tab eventKey="4" title="ANDROID">
            <DetailRoom id="android"/>
          </Tab>
        </Tabs>
      );
    }
    return (
      <ControlledTabs />
    );
  }
}

export default Contents;

