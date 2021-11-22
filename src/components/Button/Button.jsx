import './Button.scss';
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.route} type="button" className={`${props.className}`}>
      {props.title}
    </Link>
  )
};

export default Button;