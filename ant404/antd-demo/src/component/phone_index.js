import React, { Component } from 'react';
import {Col,Row} from 'antd';

import Menuh from './menuh';
import Content from './content';

import 'antd/dist/antd.css';
import '../App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}><Menuh /></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}><Content /></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default App;
