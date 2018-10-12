import React from 'react';
import { Switch, Route } from 'react-router-dom';
import YourDriver from './views/YourDriver/YourDriver';
import TopCard from './views/Dashboard/TopCard/TopCard';

export default  (
      
        <Switch>
          <Route exact path='/' component={ TopCard }/>
          <Route path='/YourDriver' component={ YourDriver }/>
          {/* <Route path='/Step2' component={ Step2 }/>
          <Route path='/Step3' component={ Step3 }/> */}
        </Switch>
      
)