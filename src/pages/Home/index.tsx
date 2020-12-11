import React from 'react';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';

import './index.css';
import imgHome from '../../images/igor.png';
import Cases from '../../components/cases/Cases';

const index = () => {

  return (
    <div id="page-home">
      <div className="page-container">
        <header>
          <ul>
            <li className="active"><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Cases</a></li>
          </ul>
        </header>

        <main>

          <div className="home-content">
            <div className="description">
              <h1>Hello, I'm Igor!'</h1>
              <p>
                Data Warehouse is a data storage area that has been
                tested for security, so you can store your data here
                safely but not be afraid of being stolen by others.
            </p>
              <a href="https://www.instagram.com/falaigors/"
                className="btn-social">
                <FiInstagram size={26} />
              </a>
              <a href="https://www.linkedin.com/in/falaigor/"
                className="btn-social">
                <FiLinkedin size={26} />
              </a>
            </div>

            <div className="img-home">
              <img src={imgHome} alt="Igor Santos" />
            </div>
          </div>

          <Cases />
          <Cases />
          <Cases />
          <Cases />


        </main>
      </div>
    </div>
  )
}

export default index
