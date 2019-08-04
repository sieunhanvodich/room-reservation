import React, { Component, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
class Contents extends Component {
    render() {
        function ControlledTabs() {
            const [key, setKey] = useState('home');
            return (
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                    <Tab eventKey="home" title="IOT">
                        <p>aaaaaa</p>
                    </Tab>
                    <Tab eventKey="profile" title="IOS">
                        <p>aaaaaa</p>
                    </Tab>
                    <Tab eventKey="contact" title="AWS">
                        <p>aaaaaa</p>
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
