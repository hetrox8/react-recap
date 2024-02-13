import Greeting from './Components/Greeting.jsx'
import './App.css'
import Rendering from './Components/Rendering.jsx';
import ConditionalRender from './Components/ConditionalRender.jsx';
import Props from './Components/Props.jsx';

function App() {
  const dataValue = "this is the first prop";
  return (
    <>
      <Greeting data={dataValue} name="suleiman" age={21} />
      <Rendering />
      <ConditionalRender/>
      <Props name= 'suleiman ' school='microverse' course='full-stack software development' />
    </>
  )
}

export default App
