import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UserList from '../containers/user-list';
import ActiveUserComponent from '../containers/active-user-component';
import Welcome from './welcome';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/" component={ActiveUserComponent} />
      <Route path="/user" component={ActiveUserComponent} />
      <Route path="/users" component={UserList} />
    </div>
    </BrowserRouter>
  );
}

export default App;
