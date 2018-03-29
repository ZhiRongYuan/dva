import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ExtendIndex from './routes/extend';
import FeedBack from './routes/extend/FeedBack';
import PageTest from './routes/extend/PageTest';
import MemberPointIndex from './routes/memberpoint';
import MemberPointPage1 from './routes/memberpoint/MemberPointPage1';
import NoFoundPage from './routes/NoFoundPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRedirect to="/extend" />
        <Route path="/extend" component={ExtendIndex}>
          <IndexRedirect to="/extend/feedback" />
          <Route path="/extend/feedback" component={FeedBack} />
          <Route path="/extend/*" component={PageTest} />
        </Route>
        <Route path="/memberpoint" component={MemberPointIndex}>
          <IndexRedirect to="/memberpoint/Page1" />
          <Route path="/memberpoint/Page1" component={MemberPointPage1} />
        </Route>
        <Route path="*" component={NoFoundPage} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
