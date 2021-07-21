import React from 'react'
import Menu from '../../components/Menu'

import { Button,Layout } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './index.scss'
const { Header, Footer, Sider, Content } = Layout;



export default class App extends React.Component {
  state = {
    collapsed: false,
    loadings: [],
  };

toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
};
  render() {
    const { loadings } = this.state;
    return (
      <div className=''>
        <Layout>
          <Sider>
            <Menu/>
          </Sider>
          <Layout className="site-layout">
            <Header className='site-layout-background'>
              <Button type="primary" onClick={this.toggleCollapsed} >
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loadings[1]}
              >
                退出账号
              </Button>
            </Header>
            <Content>
              Content
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);