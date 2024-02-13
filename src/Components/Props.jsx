import React from 'react';
import PropTypes from 'prop-types';

const Props = (props) => {
  const { name, school, course } = props;
  return (
    <div className="container">
      <h1> Hi my name is {name}</h1>
      <p>i am currently learning {course} at {school}</p>
    </div>
  );
};

Props.propTypes = {
  name: PropTypes.string,
  course: PropTypes.string,
  school: PropTypes.string
};

export default Props;
