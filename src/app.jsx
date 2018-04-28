import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Admin from './admin';

export const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Admin} />
      </div>
    </Router>
  );
};

export default App;
