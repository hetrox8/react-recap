import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  const { name, age, data } = props;

  return (
    <div>
      <h1>{data}</h1>
      <p>Hello, my name is: {name}, and I am {age} years old</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
};


Greeting.defaultProps = {
  age: 0,
  name: "Guest",
  data:"first component"
  
}

export default Greeting;
