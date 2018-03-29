import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
const SubMenu = Menu.SubMenu;

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
          this.props.menuData.map((item, index) => {
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

export default connect(
  state => {
    const { menuData } = state.app;
    return {
      menuData
    };
  }
)(AppMenu);
