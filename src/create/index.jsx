import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from 'material-ui';
import { connect } from 'react-redux';

import View from './view';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: undefined,
    };
    this.onSend = this.onSend.bind(this);
  }

  async onSend(values) {
    const sendableValues = {
      ...values,
      points: isNaN(values.points) ? 0 : values.points * 1.0,
      value: isNaN(values.value) ? 0 : values.value * 1.0,
    };
    const res = await fetch('http://localhost:8000/admin/achievment', {
      method: 'POST',
      body: JSON.stringify(sendableValues),
    });
    if (res.status !== 200) {
      const error = await res.text();
      console.error(error);
      this.setState({
        message: 'Could not save',
      });
      return;
    }
    this.setState({
      message: 'Saved successfully',
    });


    this.props.dispatch({ type: 'ADD' });
  }

  render() {
    if (this.state.message) {
      setTimeout(() => {
        this.setState({
          message: undefined,
        });
      }, 1000);
    }

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={!!this.state.message}
          message={this.state.message}
        />
        <View initialValues={{ type: 'Running', unit: 'Kilometers' }} onSend={this.onSend} />
      </div>
    );
  }
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Form);
