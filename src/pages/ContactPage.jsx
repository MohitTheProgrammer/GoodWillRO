const ContactPage = () => {
  return (
    <>
      <div className="main-top" id="home" style={{ backgroundColor: "black" }}>
        <div className="banner_w3lspvt-2"></div>
      </div>
      <section className="contact py-5">
        <div className="container py-xl-5 py-lg-3">
          <h3 className="title-w3 text-bl text-center font-weight-bold mb-sm-5 mb-4">
            Contact Us
          </h3>
          <div className="row mail-w3l-agile pt-xl-4">
            <div className="col-md-5 contact-left-w3ls">
              <h3>Contact Info</h3>
              <div className="row visit">
                <div className="col-md-2 col-sm-2 col-2 contact-icon-wthree">
                  <span className="fa fa-home" aria-hidden="true"></span>
                </div>
                <div className="col-md-10 col-sm-10 col-10 contact-text-agileinf0">
                  <h4>Visit us</h4>
                  <p>3418, Chawri Bazar, Hauz Qazi, </p>
                  <p>New Delhi, Delhi - 110006</p>
                </div>
              </div>
              <div className="row mail-w3 my-4">
                <div className="col-md-2 col-sm-2 col-2 contact-icon-wthree">
                  <span className="fa fa-envelope-o" aria-hidden="true"></span>
                </div>
                <div className="col-md-10 col-sm-10 col-10 contact-text-agileinf0">
                  <h4>Mail us</h4>
                  <p>
                    <a href="mailto:goodwillrowaterpurifier@gmail.com">
                      goodwillrowaterpurifier@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="row call">
                <div className="col-md-2 col-sm-2 col-2 contact-icon-wthree">
                  <span className="fa fa-phone" aria-hidden="true"></span>
                </div>
                <div className="col-md-10 col-sm-10 col-10 contact-text-agileinf0">
                  <h4>Call us</h4>
                  <p>+919650438072</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 agileinfo_mail_grid_right mt-md-0 mt-5">
              <form action="#" method="post">
                <div className="form-group">
                  <input
                    type="text"
                    name="Name"
                    className="form-control"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="Email"
                    className="form-control"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="Message"
                    placeholder="Message......."
                    required=""
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="map p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279.7244500485346!2d77.22653602722865!3d28.64922416254938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd17b1b1695b%3A0x33c7eb9e1064a3dc!2s3418%2C%20Chawri%20Bazar%20Rd%2C%20Bazar%20Sirkiwalan%2C%20Khush%20Dil%2C%20Old%20Delhi%2C%20New%20Delhi%2C%20Delhi%20110006!5e0!3m2!1sen!2sin!4v1593353072256!5m2!1sen!2sin"
          className="map"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
