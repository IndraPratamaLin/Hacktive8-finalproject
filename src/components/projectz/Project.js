import React from 'react'
import './Project.style.scss'
import data from './data'
import { useNavigate } from 'react-router-dom'

function round(num) {
  let m = Number((Math.abs(num) * 100).toPrecision(15));
  return Math.round(m) / 100 * Math.sign(num);
}

function Project() {

  const navigate = useNavigate();

  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">
          Machine Learning Projects
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Image Classification</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Computer Vision</li>
                  <li></li>
                  <li></li>
                  <li>Tensorflow JS</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Enter</p>
                  <p className="card__price-value">Project</p>
                </div>
                <button className="btn--white" onClick={() => navigate('/img-classifier')}>GO!</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Movie Search</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Fetch API</li>
                  <li></li>
                  <li></li>
                  <li>OMD API</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Enter</p>
                  <p className="card__price-value">Project</p>
                </div>
                <button className="btn--white" onClick={() => navigate('/movie')}>GO!</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Speech Recognition</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Audio</li>
                  <li></li>
                  <li></li>
                  <li>Python Backend</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Under</p>
                  <p className="card__price-value">Dev</p>
                </div>
                {/* onClick={() => navigate('/speech-recognition')} */}
                {/* <button className="btn--white">GO!</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Project