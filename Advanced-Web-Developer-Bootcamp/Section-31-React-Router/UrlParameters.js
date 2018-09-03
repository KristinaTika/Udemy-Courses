import React from 'react';
import {
 Switch, Route
} from 'react-router-dom';

const Homepage = () => (<div>HOMEPAGE</div>);
const Name = ({match}) => (
  <div>Hello, {match.params.name}</div>
);
const SwitchDemo = () => (
  <Switch>
    <Route path="/:name" component={Name}/>
    <Route path="/" component={Homepage}/>
  </Switch>
);