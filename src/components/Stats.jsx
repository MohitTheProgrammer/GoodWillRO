const Stats = () => {
  return (
    <div className="stats py-5" id="stats">
      <div className="container py-xl-5 py-lg-3">
        <h3 className="title-w3 text-wh text-center font-weight-bold mb-sm-5 mb-4">
          Our Statistics
        </h3>
        <div className="row text-center py-sm-3">
          <div className="col-md-3 col-sm-6 w3layouts_stats_left">
            <p className="counter">8</p>
            <p className="para-text-w3ls text-li">Years of Experience</p>
          </div>
          <div className="col-md-3 col-sm-6 w3layouts_stats_left mt-md-0 mt-4">
            <p className="counter">600</p>
            <p className="para-text-w3ls text-li">Contest attended</p>
          </div>
          <div className="col-md-3 col-sm-6 w3layouts_stats_left mt-md-0 mt-4">
            <p className="counter">300</p>
            <p className="para-text-w3ls text-li">Happy Customer</p>
          </div>
          <div className="col-md-3 col-sm-6 w3layouts_stats_left mt-md-0 mt-4">
            <p className="counter">30</p>
            <p className="para-text-w3ls text-li">Camps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
