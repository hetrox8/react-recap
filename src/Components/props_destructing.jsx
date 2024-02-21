const Student = ({ name, school, age }) => {
  return (
    <p>Hello my name is : {name} and I am {age} years old, learning at {school}</p>
  );
}

const App = () => {
  const props = { name: 'suleiman', school: 'microverse', age: 21 };

  return (
    <Student {...props} />
  );
}

function Button({text,color}){
  const Styles = {
    text: text,
    color: color
  }
  return (
    <div>
<button  style={Styles}>  {text}</button>
    </div>
    
  )
}


function App1(){

  return(
    <div>
      <Button text="click me" color="blue" />
    </div>

  )
}


function Button({text,color}){
  const Styles = {
    text: text,
    color: color
  }
  return (
    <div>
<button  style={Styles}>  {text}</button>
    </div>
    
  )
}


function App(){
const props = { text: 'click me', color: 'green'}
  return(
    <div>
      <Button {...props} />
    </div>

  )
}






