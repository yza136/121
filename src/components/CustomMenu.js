import React, { Component } from 'react'
import { HashRouter, Route, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class App extends React.Component {
    state = {
        collapsed: false,
        SelectedKey: '/'
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    UNSAFE_componentWillReceiveProps (){
        this.setState({
            SelectedKey: this.props.history.location.pathname
        })
    }
    selectClick = () => {
        
        
    }
    render() {
        return (
            <div>
                <Scrollbars className='left-wrap' >
                    <Menu
                        defaultSelectedKeys={['/']}
                        selectedKeys={[this.state.SelectedKey]}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        onSelect={this.selectClick}
                    >
                        <Menu.Item key="/" icon={<PieChartOutlined />}>
                            <Link to='/' replace>概况</Link>
                        </Menu.Item>
                        <Menu.Item key="/board" icon={<DesktopOutlined />}>
                            <Link to='/board' replace>控制台</Link>
                        </Menu.Item>
                        <Menu.Item key="/DataManage" icon={<ContainerOutlined />}>
                            <Link to='/DataManage' replace>数据管理</Link>
                         </Menu.Item>
                    </Menu>
                </Scrollbars>
            </div>
        )
    }
}


export default withRouter(App) 
