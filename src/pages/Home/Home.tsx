import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <div className="left-container">
            <h5 className="left-container-title">SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className="left-container-heading">SPACE</h1>
            <p className="left-container-paragraph">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link to="destination">
            <div className="right-container">
              <h4 className="right-container-title">EXPLORE</h4>
              <div className="layout"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
