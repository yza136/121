import React from 'react'
import Menu from './components/Menu'
import Router from './router/index'
import {HashRouter,BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import { Button, Layout, Breadcrumb } from 'antd';
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
import './App.scss'
const { Header, Footer, Sider, Content } = Layout;

const routes = [
  {
    path: 'index',
    breadcrumbName: 'home',
  },
  {
    path: 'first',
    breadcrumbName: 'first',
    children: [
      {
        path: '/general',
        breadcrumbName: 'General',
      },
      {
        path: '/layout',
        breadcrumbName: 'Layout',
      },
      {
        path: '/navigation',
        breadcrumbName: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    breadcrumbName: 'second',
  },
];


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
       <HashRouter>
        {/* <Breadcrumb itemRender={this.itemRender()} routes={routes} /> */}
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu collapsed={this.state.collapsed} />
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
              <div>
                  <Router></Router>
              </div>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
        </HashRouter>
      </div>
    );
  }
}
