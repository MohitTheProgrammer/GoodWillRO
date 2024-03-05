import { Link } from "react-router-dom";


const NavigationBar = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="header d-md-flex justify-content-between align-items-center py-3 px-xl-5 px-lg-3 px-2">
          <div id="logo">
            <h1>
              <a className="" href="index.html">
                GoodWill RO Water Purifier
              </a>
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
                  <a href="index.html" className="active">
                    Home
                  </a>
                </li>
                <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar