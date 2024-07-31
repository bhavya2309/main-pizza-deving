/* eslint-disable react/prop-types */
import './styles/button.css'

const Button = (props) => {
  return (
    <div>
      <button className={props.style} onClick={props.onClick} >Add to Cart</button>
    </div>
  )
}

export default Button
