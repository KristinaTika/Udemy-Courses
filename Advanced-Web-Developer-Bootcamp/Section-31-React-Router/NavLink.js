import React from 'react';
import {NavLink} from 'react-router-dom';
import SwitchDemo from './SwitchDemo';

const s={color: "red"}; //active style
const App = () => (
  <div>
    <NavLink exact activeStyle={s} to="/">
     HOME
    </NavLink>
    <NavLink exact activeStyle={s} to="/about">
      ABOUT
    </NavLink>
    <div style={{fontSize: '3em',margin: '25px'}}>
      <SwitchDemo/>
    </div>
  </div>
);