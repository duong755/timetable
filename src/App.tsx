import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import NgoQuangDuong from './components/NgoQuangDuong';
import VuTienAnh from './components/VuTienAnh';

const App: React.FC = () => (
  <BrowserRouter>
    <div className="p-3">
      <h3>Thời khóa biểu học kỳ 2, năm học 2019-2020</h3>
    </div>
    <div className="p-3">
      <NavLink className="btn" exact activeClassName="btn-primary" to="/">
        Home
      </NavLink>
      <NavLink className="btn" activeClassName="btn-primary" to="/ngoquangduong">
        Ngo Quang Duong
      </NavLink>
      <NavLink className="btn" activeClassName="btn-primary" to="/vutienanh">
        Vu Tien Anh
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/" />
      <Route path="/ngoquangduong">
        <NgoQuangDuong />
      </Route>
      <Route path="/vutienanh">
        <VuTienAnh />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
