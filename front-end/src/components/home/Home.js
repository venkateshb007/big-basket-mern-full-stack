import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="landing-page">
          <div className="wrapper">
            <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
              <h2 className="display-3">
                <i className="fa fa-shopping-cart"></i>
                BigBasket
              </h2>
              <p className="lead px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus hic excepturi earum aut sunt laboriosam, eaque amet
                possimus veritatis illo! Quod neque saepe non fuga, laudantium
                sunt nobis adipisci ipsam.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
