
import React from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

export default class Menuv extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: 256 }}
            >
                <SubMenu key="sub1" title={<span>老师介绍</span>}>
                    <Menu.Item key="1">刘老师</Menu.Item>
                    <Menu.Item key="2">杨老师</Menu.Item>
                    <Menu.Item key="3">任老师</Menu.Item>
                    <Menu.Item key="4">郑老师</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span>学生</span>}>
                    <Menu.Item key="5">袁伟健</Menu.Item>
                    <Menu.Item key="6">李春生</Menu.Item>
                    <SubMenu key="sub3" title="web40">
                        <Menu.Item key="7">楚睿莹</Menu.Item>
                        <Menu.Item key="8">宪宏宇</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span>就业</span>}>
                    <Menu.Item key="9">北京</Menu.Item>
                    <Menu.Item key="10">杭州</Menu.Item>
                    <Menu.Item key="11">上天</Menu.Item>
                    <Menu.Item key="12">入地</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}