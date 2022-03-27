import React from 'react'
import './Experience.style.scss'

function Experience() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Nothing is as important as passion
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Do what you love
          </h3>
          <p className="paragraph">
            Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking
          </p>

          <br />
          <br />

          <h3 className="heading-tertiary u-margin-bottom-small">
            Connecting the dots
          </h3>
          <p className="paragraph">
            Nothing is wasted, you have to trust that your experience will somehow connect in your future. Remember creativity is just connecting things!
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={require('../images/game.jpg')} alt="games" className="composition__photo composition__photo--p1" />
            <img src={require('../images/fullstack.jpg')} alt="Fullstack" className="composition__photo composition__photo--p2" />
            <img src={require('../images/artificial.jpg')} alt="AI" className="composition__photo composition__photo--p3" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience