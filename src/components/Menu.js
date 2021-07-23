import React, { Component } from 'react'
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

class App  extends  React.Component {
    state = {
        collapsed: false,
      };
    
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div>
                <Scrollbars className='left-wrap' >
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.props.collapsed}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        概况
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        控制台
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


export default App
