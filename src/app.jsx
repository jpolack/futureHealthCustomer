import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Customer from './customer';


export const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Customer} />
      </div>
    </Router>
  );
};

export default App;
