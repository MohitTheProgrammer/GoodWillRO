import about2 from "../assets/images/about2.jpg"

const About = () => {
  return (
    <div className="what py-5">
      <div className="container py-xl-5 py-lg-3">
        <h3 className="title-w3 mb-sm-4 mb-3 text-bl text-center font-weight-bold">
          Welcome to Our Website
        </h3>
        <p className="mx-auto wstyles text-center mb-sm-5 mb-4">
          Around 60 percent of the body is made up of water, and around 71
          percent of the planet’s surface is covered by water. Perhaps it is the
          ubiquitous nature of water that means drinking enough each day is not
          at the top of many people’s lists of priorities.
        </p>
        <img src={about2} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default About;
