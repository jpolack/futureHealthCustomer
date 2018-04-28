import React from 'react';

import Create from './create';
import AchievmentList from './list';

export default () => (
  <div style={{ padding: 30 }}>
    <h1>Admin</h1>
    <Create />
    <AchievmentList />
  </div>
);
