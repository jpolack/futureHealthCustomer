import React from 'react';
import { connect } from 'react-redux';

import View from './view';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { achievs: [] };
    this.loadAchievments = this.loadAchievments.bind(this);
  }

  componentDidMount() {
    this.loadAchievments();
  }

  async componentWillReceiveProps() {
    await this.loadAchievments();
    this.props.dispatch({ type: 'RELOADED' });
  }

  async loadAchievments() {
    const res = await fetch('http://localhost:8000/admin/achievments');
    const achievs = await res.json();
    this.setState({ achievs });
  }


  render() {
    return <View achievments={this.state.achievs} />;
  }
}

export default connect(state => ({ ...state.achievmentReducer }))(List);
