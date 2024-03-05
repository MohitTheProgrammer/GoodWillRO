import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="header d-md-flex justify-content-between align-items-center py-3 px-xl-5 px-lg-3 px-2">
          <div id="logo">
            <h1>
              <NavLink exact to="/" activeClassName="active">
                GoodWill RO Water Purifier
              </NavLink>
            </h1>
          </div>
          <div className="nav_w3ls">
            <nav>
              <label htmlFor="drop" className="toggle">
                Menu
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu">
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
