import './Menu.scss';
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <ul className="navbar-menu">
      {
        props.data.map((menu) => 
         <li>
           <Link to="/" className="navbar-menu-item"><span className="navbar-menu-item">{menu.menu_title}</span></Link>
           {
              menu.category && (
                <ul className="navbar-submenu">
                    <Link to="/" className="navbar-submenu-title"><span className="navbar-submenu-item">{menu.category.category_title}</span></Link>
                    {
                      menu.category.items.length && (
                        menu.category.items.map((item) => 
                          <Link to="/" className="navbar-sub"><span className="navbar-sub-item">{item.title}</span></Link>
                        ) 
                      )
                    }
                </ul>
             )
           }
        </li>
          
        )
        
      }
    </ul>
  );
}

export default Menu;
