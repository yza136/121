import React from 'react'
import Menu from '../../components/Menu'
import Router from '../../router/index'
import {HashRouter, Route, Switch,Link } from 'react-router-dom';
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
import './index.scss'
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
  itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );

  };

  render() {
    const { loadings } = this.state;
    return (
      <div className=''>
        <Breadcrumb itemRender={itemRender} routes={routes} />
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
                
              </div>
              <Router></Router>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);