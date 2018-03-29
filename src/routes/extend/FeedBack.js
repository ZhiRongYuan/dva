import React, { PropTypes } from 'react';
import { Icon, Table } from 'antd';
import Styles from './FeedBack.less';


const dataSource = [{
  key: '1',
  name: '用户',
  content: 32,
  label: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  content: 42,
  label: '西湖区湖底公园1号'
}];

const columns = [{
  title: '用户',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '反馈内容',
  dataIndex: 'content',
  key: 'content',
}, {
  title: '标签',
  dataIndex: 'label',
  key: 'label',
}, {
  title: '操作',
  dataIndex: 'operate',
  key: 'operate',
  render: () => {
    return <span>回复</span>;
  }
}];

class TabMenu extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={Styles.FeedBackWrap}>
        <Table rowClassName={Styles.rowClassName} dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default TabMenu;
