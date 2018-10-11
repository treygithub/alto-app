import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
// import TopCard from './views/TopCard/TopCard';

export default  (
      
        <Switch>
          <Route exact path='/' component={ Dashboard }/>
          {/* <Route path='/TopCard' component={ TopCard }/>
          <Route path='/Step2' component={ Step2 }/>
          <Route path='/Step3' component={ Step3 }/> */}
        </Switch>
      
)