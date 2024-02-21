
const Button = (props) => {
  const buttonStyles = {
    color: color.props,
    fontSize: fontSize.props + 'px',
    text: text.props
  }

  return(
    <button style={buttonStyles} >{props.text}</button>
  )
}



const App = () => {

  return(
    <div className="container">
      <Button text='click me' color='blue' fontSize={12} />
      <Button text="don't click me" color= 'green' fontSize={9}/>
    </div>
  )
}