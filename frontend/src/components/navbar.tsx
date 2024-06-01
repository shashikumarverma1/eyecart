import { IoSearch, IoBriefcaseOutline } from "react-icons/io5";
import "./NavBar.css"; // Import the CSS file
import { SearchTextInFo } from "../context/searchProvider";
import { useContext } from "react";

function NavBar() {
  const { setSearchText } = useContext(SearchTextInFo);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center",  }}>
          <img
            src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
            alt="logo"
            style={{width:100 , height:30}}
          />
          <ul style={{ display: "flex" }}>
            <li style={{ paddingLeft: 8, fontSize: 8 }}>Home</li>
            <li style={{ paddingLeft: 8, fontSize:8 }}>Shop</li>
            <li style={{ paddingLeft: 8, fontSize: 8 }}>Feature</li>
            <li style={{ paddingLeft: 8, fontSize: 8 }}>Recommended</li>
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              backgroundColor: "#F5F5F5",
              border: "1px solid #E0E0E0",
            //   padding: 4,
              paddingLeft: 10,
              paddingRight: 10,
              fontSize: 10,
            }}
          >
            filter
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #E0E0E0",
              marginRight: 5,
              fontSize: 10,
            //   width:200
            }}
          >
            <IoSearch />
            <input
              type="text"
              placeholder=" search"
              className="custom-input"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <IoBriefcaseOutline />
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ paddingLeft: 10, fontSize: 8 }}>User</p>
            <img
              src="https://avatars.githubusercontent.com/u/103879105?v=4"
              alt="image"
              style={{ width: 10, height: 10, fontSize: 10 }}
            />
            <select style={{ marginLeft: 0, fontSize: 10 }}>
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
