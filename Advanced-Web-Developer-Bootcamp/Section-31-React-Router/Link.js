import React from 'react';
import {Link} from 'react-router-dom';
import SwitchDemo from './SwitchDemo';

const App = () => (
  <div>
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
    <div style={{fontSize: '3em',
                 margin: '25px'}}>
      <SwitchDemo/>
    </div>
  </div>
);