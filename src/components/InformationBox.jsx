import LightBulb from '../assets/images/light-bulb.svg';

import '../assets/styles/information-box.scss';

export default function InformationBox() {
  return (
    <section>
        <div className="slide-in-bottom information-box-wrapper">
            <div className="information-box__title">🚀 How To Play</div>
            <ul>
                <li>Guess the right combination of numbers</li>
                <li>Win <span className="bold-text">N3,000,000</span> instantly</li>
            </ul>
            <p className="information-box__paragraph">Sounds unbelievable? Well, guess right &amp; see for yourself!</p>
            <div className="information-box__tip">
              <img src={LightBulb} alt="" />
              <p>Think well before you guess. You have only 2 attempts per day and even after you wi, you can come back the next day to try for another jackpot!</p>
            </div>
        </div>
    </section>
  )
}
