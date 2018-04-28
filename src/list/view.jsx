import React from 'react';

import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

const ListView = ({ achievments }) => (
  <div >
    {achievments.reverse().map(achiev => (
      <Paper key={achiev.id} style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
        <h2>{achiev.name}</h2>
        <p>{achiev.description}</p>
        <p>{achiev.type}:&nbsp;{achiev.value}&nbsp;{achiev.unit}</p>
      </Paper>
  ))}
  </div >
);

ListView.propTypes = {
  achievments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  })).isRequired,
};

export default ListView;
