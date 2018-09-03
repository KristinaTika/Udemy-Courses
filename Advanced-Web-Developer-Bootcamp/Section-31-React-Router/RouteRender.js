import {Route} from 'react-router-dom';
const teachers = ['Tim', 'Colt', 'Matt', 'Elie'];
const Teachers = ({teachers}) => (
  <ul>
    {teachers.map((teach, ind) => (
      <li key={i}>{teach}</li>
     ))}
  </ul>
);

const App = () => (
  <Route path="/teachers" render={props => (
    <Teachers {...props} teachers={teachers} />
  )}/>
);