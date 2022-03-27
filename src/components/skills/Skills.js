import React from 'react'
import './Skills.style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function Skills() {
  return (
    <section className="section-features">

      <div className="row">
        <div className="col-1-of-3">
          <div className="feature-box">
          <FontAwesomeIcon icon={["fab", "python"]} className='feature-box__icon' />
          <h3 className="heading-tertiary-2 u-margin-bottom-small">Data <br /> Science</h3>
          <p className="feature-box__text">
            SQL, MongoDB<br />Pandas, Matplotlib, Tableau<br />PyTorch Tensorflow
          </p>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="feature-box">
          <FontAwesomeIcon icon={["fab", "js"]} className='feature-box__icon' />
          <h3 className="heading-tertiary-2 u-margin-bottom-small">Fullstack Developer</h3>
          <p className="feature-box__text">
            HTML CSS JavaScript<br />ReactJs, ReactNative<br />NodeJS
          </p>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="feature-box">
          <FontAwesomeIcon icon={["fas", "fa-language"]} className='feature-box__icon' />
          <h3 className="heading-tertiary-2 u-margin-bottom-small">Foreign Language</h3>
          <p className="feature-box__text">
            Bahasa Indonesia<br />English<br />Chinese
          </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Skills