import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';

import AchievmentList from './list';

class customerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    if (this.props.config.token) {
      this.props.dispatch({
        type: 'LOGIN',
        token: this.props.config.token,
      });
      return;
    }
    console.log('Token not present getting new');
    const res = await fetch(`${this.props.config.baseUrl}/login`, { method: 'POST' });
    const token = await res.json();
    this.props.dispatch({
      type: 'LOGIN',
      token,
    });
  }

  render() {
    return (
      <div style={{ padding: 30, backgroundColor: '#fff' }}>
        <Typography variant="display1" color="primary">
          Future Health
        </Typography>
        <AchievmentList />
      </div>
    );
  }
}

customerView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(
  ({ configReducer }) => ({ config: configReducer }),
)(customerView);
