const Carousal = () => {
  return (
    <div className="banner_w3lspvt" style={{backgroundColor: "black"}}>
      <div className="csslider infinity" id="slider1">
        <input type="radio" name="slides"  id="slides_1" />
        <input type="radio" name="slides" id="slides_2" />
        <input type="radio" name="slides" id="slides_3" />
        <input type="radio" name="slides" id="slides_4" />
        <ul className="banner_slide_bg">
          <li>
            <div className="container">
              <div className="w3ls_banner_txt text-center ml-auto pr-xl-0 pr-sm-4 pr-5">
                <h3 className="w3ls_pvt-title text-wh text-uppercase let mb-2">
                  Water Purifier Services
                </h3>
                <p>Thousands Have Lived Without Love, Not One Without Water.</p>
                <a
                  href="tel:+919650438072"
                  style={{ maxWidth: "150px" }}
                  className="btn bg-primary text-light btn-lg mt-sm-5 mt-4"
                >
                  Call US
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="w3ls_banner_txt text-center ml-auto pr-xl-0 pr-sm-4 pr-5">
                <h3 className="w3ls_pvt-title text-wh text-uppercase let mb-2">
                  Water Purifier Services
                </h3>
                <p>Thousands Have Lived Without Love, Not One Without Water.</p>
                <a
                  href="tel:+919650438072"
                  style={{ maxWidth: "150px" }}
                  className="btn bg-primary text-light btn-lg mt-sm-5 mt-4"
                >
                  Call US
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="w3ls_banner_txt text-center ml-auto pr-xl-0 pr-sm-4 pr-5">
                <h3 className="w3ls_pvt-title text-wh text-uppercase let mb-2">
                  Water Purifier Services
                </h3>
                <p>Thousands Have Lived Without Love, Not One Without Water.</p>
                <a
                  href="tel:+919650438072"
                  style={{ maxWidth: "150px" }}
                  className="btn bg-primary text-light btn-lg mt-sm-5 mt-4"
                >
                  Call US
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="w3ls_banner_txt text-center ml-auto pr-xl-0 pr-sm-4 pr-5">
                <h3 className="w3ls_pvt-title text-wh text-uppercase let mb-2">
                  Water Purifier Services
                </h3>
                <p>Thousands Have Lived Without Love, Not One Without Water.</p>
                <a
                  href="tel:+919650438072"
                  style={{ maxWidth: "150px" }}
                  className="btn bg-primary text-light btn-lg mt-sm-5 mt-4"
                >
                  Call US
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="arrows">
          <label htmlFor="slides_1"></label>
          <label htmlFor="slides_2"></label>
          <label htmlFor="slides_3"></label>
          <label htmlFor="slides_4"></label>
        </div>
        <div className="navigation">
          <div>
            <label htmlFor="slides_1"></label>
            <label htmlFor="slides_2"></label>
            <label htmlFor="slides_3"></label>
            <label htmlFor="slides_4"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
