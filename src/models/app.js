const menudata1 = [
  {
    title: '票圈管理',
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
];

const menudata2 = [
  {
    title: '票圈管理',
    children: [{
      path: 'extend/1',
      title: 'test',
      key: '1dsg322'
    }]
  }
];

export default {

  namespace: 'app',

  state: {
    menuData: menudata1
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(location => {
        if (/extend/.test(location.pathname)) {
          dispatch({ type: 'putState', payload: { menuData: menudata1 }} );
        } else {
          dispatch({ type: 'putState', payload: { menuData: menudata2 }} );
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    putState(state, { payload: payload }) {
      return {
        ...state,
        ...payload
      };
    },
  },

};
