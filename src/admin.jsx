import React from 'react';
import Typography from 'material-ui/Typography';
import { withTheme } from 'material-ui/styles';

import Create from './create';
import AchievmentList from './list';

const adminView = ({ theme }) => (
  <div style={{ padding: 30, backgroundColor: '#fff' }}>
    <Typography variant="display1" color="primary">
      Admin
    </Typography>
    <Create />
    <AchievmentList />
  </div>
);

export default withTheme()(adminView);
