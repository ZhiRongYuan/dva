import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import Styles from './TabMenu.less';

const mainMenuData = [{
  imgSrc: 'img/tab_menu_01.png',
  path: 'extend',
  title: '推广运营'
},{
  imgSrc: 'img/tab_menu_02.png',
  path: 'memberpoint',
  title: '会员积分'
},{
  imgSrc: 'img/tab_menu_03.png',
  path: 'pagemanager',
  title: '页面管理'
},{
  imgSrc: 'img/tab_menu_04.png',
  path: 'shopmanager',
  title: '商场管理'
}]

class TabMenu extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className={Styles.TabMenuWrap}>
        {
          mainMenuData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} activeClassName={Styles.active}>
                  <img src={item.imgSrc}></img>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default TabMenu;
