// import React from 'react'

// function Rendering() {
//   const animals = ['dog', 'cat', 'bird']
//   return (
//     <div className='div-1'>
//       <ul>
//        {animals.map((animal) =>{
//         return <li key={animal}> {animal}</li>
//        })}
//       </ul>
//     </div>
//   )
// }

// export default Rendering
import React from 'react';

function Rendering() {
  const animals = ['dog', 'cat', 'bird'];
  const list = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default Rendering;
