import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="row">
          <ul class="footer-menu">
          <Link to='/'>
            Logo
          </Link>
          <div>
            <Link to="/">
              Home
            </Link>
          </div>
        </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;