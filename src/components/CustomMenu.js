import React, { Component } from 'react'
import { HashRouter, Route, Switch, Link, NavLink,withRouter} from 'react-router-dom';
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
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    UNSAFE_componentWillMount(){
        console.log(this.props.history.location.pathname)
    }
    render() {
        return (
            <div>
                <Scrollbars className='left-wrap' >
                    <Menu
                        defaultSelectedKeys={[this.props.history.location.pathname]}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.props.collapsed}
                    >
                        <Menu.Item key="/" icon={<PieChartOutlined />}>
                            <Link to='/' replace   >概况</Link>
                        </Menu.Item>
                        <Menu.Item key="/board" icon={<DesktopOutlined />}>
                            <Link to='/board' replace>控制台</Link> 
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ContainerOutlined />}>
                            数据管理
                         </Menu.Item>
                    </Menu>
                </Scrollbars>
            </div>
        )
    }
}


export default withRouter(App) 
