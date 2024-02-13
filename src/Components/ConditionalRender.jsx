import PropTypes from 'prop-types';

const Logic = (props) => {
  return (
    <ul>
      {props.names.map((name) => {
        return name.startsWith('s') ? <li key={name}>{name}</li> : null;
      })}
    </ul>
  );
};

function ConditionalRender() {
  const namesArray = ['suleiman', 'gacheru', 'yusuf','shakira'];

  return (
    <div>
      <h1>Names include:</h1>
      <Logic names={namesArray} />
    </div>
  );
}

export default ConditionalRender;


Logic.prototype = {
  names: PropTypes.arrayOf(PropTypes.string).isRequire
}