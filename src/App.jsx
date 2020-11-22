import React from 'react';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';

import Classes from './components/Classes';
import Exams from './components/Exams';

const App: React.FC = () => (
  <BrowserRouter>
    <div className="p-3">
      <h3>Thời khóa biểu học kỳ 2, năm học 2019-2020</h3>
    </div>
    <div className="p-3">
      <NavLink className="btn" exact activeClassName="btn-primary" to="/">
        Thời khóa biểu
      </NavLink>
      <NavLink className="btn" activeClassName="btn-primary" to="/exams">
        Lịch thi
      </NavLink>
    </div>
    <Switch>
      <Route exact path="/">
        <Classes />
      </Route>
      <Route path="/exams">
        <Exams />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
