import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const onlclick = () => {
    setCount(prevCount => prevCount + 1)
  }
   return(
    <div className="container">
      <button onClick={onlclick}>Click me</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Button


const Person = () => {
  const [person,setPerson] = useState[{name:'suleiman', age: 21, nationality: 'kenyan'}];
  const handlePerson = () => {
    setPerson({...person,age: person.age + 1})
  }
  return(
    <div className="about">
      <p> my name is {person.name} and i am {person.age}  years old</p>
      <button onClick={handlePerson}> increase my age</button>
    </div>
  )
}

//advance
function Person() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });

  const handleIncreaseAge = () =>{
    console.log("in handleIncreaseAge (before setPerson call): ", person)
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}