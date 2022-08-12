import Navigation from './components/Navigation';
import InformationBox from './components/InformationBox';
import StarBurstLights from './components/StarburstLights';

import CheveronRight from './assets/images/cheveron-right.svg';
import TopStars from './assets/images/top-stars.png';
import Coins from './assets/images/coins.png';
import LeftCoin from './assets/images/left-coin.png';
import RightCoin from './assets/images/right-coin.png';

import './assets/styles/app.scss';

function App() {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Navigation />
        <img className="top-stars" src={TopStars} alt="" />
        <section className="title-section">
          <h1 className="main-title slide-in-bottom delay-500ms">
            <div>
              <span className="light-title">Unlock to </span>Power your dreams!
            </div>
          </h1>
          <p className="second-title slide-in-bottom delay-600ms">
            Stand a chance to win <span>N3,000,000</span> everyday for the next 5 days
          </p>
        </section>
        <InformationBox />
        <div className="slide-in-bottom button-container">
          <button className="play-the-game-btn">
            <span>Play the game</span>
            <img src={CheveronRight} alt="" />
          </button>
        </div>
        <div className="coins-images">
          <img className="bounce coins-images__left-coin" src={LeftCoin} alt="" />
          <img className="slide-in-bottom coins-images__coins" src={Coins} alt="" />
          <img className="bounce coins-images__right-coin" src={RightCoin} alt="" />
        </div>
        <StarBurstLights />
      </div>
    </div>
  );
}

export default App;
