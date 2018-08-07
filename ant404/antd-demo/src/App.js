import React, { Component } from 'react';
import {Col,Row} from 'antd';
import MediaQuery from 'react-responsive';

import Phone_index from './component/phone_index';
import Menuh from './component/menuh';
import Menuv from './component/menuv';
import Content from './component/content';

import 'antd/dist/antd.css';
import './App.css';

class Pc_index extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={7}></Col>
                    <Col span={13}><Menuh /></Col>
                    <Col span={2}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}><Menuv /></Col>
                    <Col span={16}><Content /></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
class App extends Component {
  render() {
    return (
        <div>
            <MediaQuery query="(min-device-width: 1224px)">
                <Pc_index />
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
                <Phone_index />
            </MediaQuery>
        </div>
    );
  }
}

export default App;
