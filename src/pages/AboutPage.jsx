import ab from "../assets/images/ab.jpg";
import wh1 from "../assets/images/wh1.jpg";
import wh2 from "../assets/images/wh2.jpg";
import wh3 from "../assets/images/wh3.jpg";
import wh4 from "../assets/images/wh4.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="main-top" id="home" style={{ backgroundColor: "black" }}>
        <div className="banner_w3lspvt-2"></div>
      </div>
      <div className="what py-5" id="what">
        <div className="container py-xl-5 py-lg-3">
          <h3 className="title-w3 text-bl text-center font-weight-bold mb-sm-5 mb-4">
            About Us
          </h3>
          <div className="row pt-xl-4">
            <div className="col-lg-6 serv_bottom text-center mt-xl-3">
              <div className="row mt-xl-4">
                <div className="col-sm-6">
                  <div className="bottom-gd">
                    <img src={wh1} alt="" className="img-fluid" />
                    <h3 className="my-3 font-weight-bold">RO SERVICE</h3>
                    <p>
                      RO water purifier Services offers the good quality of RO
                      repair services of water purifier machines and their
                      accessories.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 mt-sm-0 mt-4">
                  <div className="bottom-gd">
                    <img src={wh2} alt="" className="img-fluid" />
                    <h3 className="my-3 font-weight-bold">RO INSTALLATION</h3>
                    <p>
                      The installation of RO system is very easy. You can
                      install it under your kitchen sink to supply the purified
                      water
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-sm-5 mt-4 pt-xl-4">
                <div className="col-sm-6">
                  <div className="bottom-gd">
                    <img src={wh3} alt="" className="img-fluid" />
                    <h3 className="my-3 font-weight-bold">RO AMC</h3>
                    <p>
                      AMC is an Annual Maintenance contract and paying it once
                      no need to get worrisome.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 mt-sm-0 mt-4">
                  <div className="bottom-gd">
                    <img src={wh4} alt="" className="img-fluid" />
                    <h3 className="my-3 font-weight-bold">RO CUSTOMER CARE</h3>
                    <p>
                      If you are facing any issue regarding RO repair service
                      and want help, feel free to reach us
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 fetured-sec mt-lg-0 mt-sm-5 mt-4">
              <img src={ab} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
