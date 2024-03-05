import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container py-xl-4">
          <div className="row footer-top">
            <div className="col-md-5 footer-grid_section_1its">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-6">
                  <h2 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                    About Us
                  </h2>
                  <p>
                    We are Goodwill RO Water Purifier we provide best RO
                    services at reasonable prices
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 mt-lg-0 mt-md-4 mt-sm-0 mt-4">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                    Who We Are
                  </h3>
                  <p>
                    We are Goodwill RO Water Purifier we provide best RO
                    services at reasonable prices
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 footer-grid_section_1its my-md-0 my-5">
              <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                Contact Us
              </h3>
              <div className="contact-info">
                <div className="footer-style-w3ls">
                  <h4 className="text-li mb-2">Phone</h4>
                  <a href="tel:+919650438072">+919650438072</a>
                </div>
                <div className="footer-style-w3ls my-4">
                  <h4 className="text-li mb-2">Email </h4>
                  <p>
                    <a href="mailto:goodwillrowaterpurifier@gmail.com">
                      goodwillrowaterpurifier@gmail.com
                    </a>
                  </p>
                </div>
                <div className="footer-style-w3ls">
                  <h4 className="text-li mb-2">Location</h4>
                  <p>
                    3418, Chawri Bazar, Hauz Qazi, New Delhi, Delhi - 110006
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-grid_section_1its">
              <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                Newsletter
              </h3>
              <p>
                Be the first to get latest news and offers!
                <br />
                Sed ut perspiciatis unde omnis.
              </p>
              <form action="#" method="post" className="subscribe_form mt-4">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  required=""
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              <div className="agileinfo_social_icons mt-4">
                <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                  Connect With Social
                </h3>
                <ul className="agileits_social_list list-unstyled">
                  <li>
                    <a href="#" className="w3_agile_facebook">
                      <span className="fa fa-facebook-f"></span>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="agile_twitter">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="w3_agile_dribble">
                      <span className="fa fa-dribbble"></span>
                    </a>
                  </li>
                  <li className="ml-2">
                    <a href="#" className="w3_agile_google">
                      <span className="fa fa-google-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyRight></CopyRight>
    </>
  );
};

export default Footer;
