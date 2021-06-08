const Button = (props) => {
  return <button onClick={props.clickHandler}>
    {props.children}</button>; {/*to refer to child element of the component*/}
}

export default Button;