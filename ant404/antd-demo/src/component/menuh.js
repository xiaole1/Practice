import React from 'react';

import { Menu } from 'antd';

import Denglu from './denglu';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Menuh extends React.Component {
    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="index">
                  首页
                </Menu.Item>
                <Menu.Item key="int">
                    公司介绍
                </Menu.Item>
                <SubMenu title={<span>产品</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                     </MenuItemGroup>
                </SubMenu>
                <Denglu />


        </Menu>
    );
    }
}

