import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const SubMenu = Menu.SubMenu;

const menuData = [
  {
    title: '票圈管理1',
    children: [{
      path: 'extend/1',
      title: 'test',
      key: '1dsg322'
    }]
  },
  {
    title: '活动管理',
    children: [{
      path: 'extend/2',
      title: 'test',
      key: '13dasfafg22'
    }]
  },
  {
    title: '优惠管理',
    children: [{
      path: 'extend/3',
      title: 'test',
      key: 'fasdsfaf'
    }]
  },
  {
    title: '投放管理',
    children: [{
      path: 'extend/4',
      title: 'test',
      key: '13fsdafa22'
    }]
  },
  {
    title: '消息中心',
    children: [{
      path: 'extend/5',
      title: 'test',
      key: '1322dsafsdfa'
    }]
  },
  {
    title: '意见反馈',
    children: [{
      path: 'extend/feedback',
      title: '意见反馈',
      key: '13222334sdakfjl'
    }]
  }
]

class AppMenu extends React.Component {
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
        style={{ width: 200, height: '100%', boxShadow: "2px 0 4px 0 rgba(0,0,0,0.15)", float: 'left' }}
      >
        {
          menuData.map((item, index) => {
            return (
              <SubMenu key={index} title={item.title}>
                {
                  item.children.map((menuItem, menuIndex) => {
                    return (
                      <Menu.Item key={menuItem.key}>
                        <Link to={menuItem.path}>{menuItem.title}</Link>
                      </Menu.Item>
                    );
                  })
                }
              </SubMenu>
            );
          })
        }
      </Menu>
    );
  }
};

export default AppMenu;
