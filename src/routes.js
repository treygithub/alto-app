import React from 'react';
import { Switch, Route } from 'react-router-dom';
import YourDriver from './views/YourDriver/YourDriver';
import TopCard from './views/Dashboard/TopCard/TopCard';
import YourVehicle from './views/YourVehicle/YourVehicle'

export default  (
      
        <Switch>
          <Route exact path='/' component={ TopCard }/>
          <Route path='/YourDriver' component={ YourDriver }/>
          <Route path='/YourVehicle' component={ YourVehicle }/>
          {/* <Route path='/Step3' component={ Step3 }/> */}
        </Switch>
      
)