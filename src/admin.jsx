import React from 'react';
import Typography from 'material-ui/Typography';

import Create from './create';
import AchievmentList from './list';

export default () => (
  <div style={{ padding: 30 }}>
    <Typography variant="display1">
      Admin
    </Typography>
    <Create />
    <AchievmentList />
  </div>
);
