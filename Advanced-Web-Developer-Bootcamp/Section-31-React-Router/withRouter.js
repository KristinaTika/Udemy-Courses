import {
    withRouter, Switch, Route
   } from 'react-router-dom';
   
   const SwitchDemo = ({history}) => (
     <div>
       <Switch>
         <Route path="/:name" component={Name}/>
         <Route path="/" component={Homepage}/>
       </Switch>
       <button onClick={() => history.push('/')}>
         Go Home
       </button>
     </div>
   );
   export default withRouter(SwitchDemo);