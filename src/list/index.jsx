import React from 'react';
import { connect } from 'react-redux';

import View from './view';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { achievs: [] };
    this.loadAchievments = this.loadAchievments.bind(this);
  }


  async componentWillReceiveProps(nextProps) {
    await this.loadAchievments(nextProps);
  }

  async loadAchievments(props) {
    const res = await fetch(`${props.config.baseUrl}/achievments`);
    const achievs = await res.json();
    this.setState({ achievs });
  }

  render() {
    return <View achievments={this.state.achievs} />;
  }
}

export default connect(
  state => ({
    ...state.achievmentReducer,
    config: state.configReducer,
  }))(List);
