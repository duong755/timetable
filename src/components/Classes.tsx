import React from 'react';
import clsx from 'clsx';

import Subject from './Subject';
import useStyles from './styles';

const Classes: React.FC = () => {
  const classes = useStyles();
  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th></th>
          <th>mon</th>
          <th>tue</th>
          <th>wed</th>
          <th>thu</th>
          <th>fri</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  );
};

export default Classes;
