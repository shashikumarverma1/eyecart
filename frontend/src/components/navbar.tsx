import { IoSearch, IoBriefcaseOutline } from "react-icons/io5";
import { SearchTextInFo } from "../context/searchProvider";
import { useContext } from "react";
import { CartInFo } from "../context/cart";
import "./NavBar.css"; // Import the CSS file

function NavBar() {
  const { setSearchText } = useContext(SearchTextInFo);
  const { cartData } = useContext(CartInFo);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img
            src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
            alt="logo"
            style={{ width: 100, height: 30 }}
          />
          <ul className="navbar-menu">
            <li className="navbar-menu-item">Home</li>
            <li className="navbar-menu-item">Shop</li>
            <li className="navbar-menu-item">Feature</li>
            <li className="navbar-menu-item">Recommended</li>
          </ul>
        </div>
        <div className="navbar-user">
          <p className="navbar-filter">filter</p>
          <div className="navbar-search">
            <IoSearch />
            <input
              type="text"
              placeholder="search"
              className="navbar-search-input"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <IoBriefcaseOutline />
          <p className="navbar-cart">{cartData.length}</p>
          <div className="navbar-user">
            <p className="navbar-user-item">User</p>
            <img
              src="https://avatars.githubusercontent.com/u/103879105?v=4"
              alt="image"
              className="navbar-user-image"
            />
            <select className="navbar-user-select">
              <option></option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
