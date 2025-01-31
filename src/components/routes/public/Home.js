import { Route1 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";

import "./style.scss";

const Home = () => {
  return (
    <Route1
      content={
        <div className="route-container home">
          <div className="home-text-container home-text-container-lightmode">
            <div className="home-text-border">
              <div className="home-text">
                <h1 className="home-title heading">StoryGram</h1>
                <p className="home-subtitle subtitle">start/continue here...</p>
                <Button1 text="open" />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Home;
