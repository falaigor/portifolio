import React from 'react';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Case from '../../components/case/Case';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './index.css';
import imgHome from '../../images/igor.png';

const index = () => {

  return (
    <div id="page-home">
      <div className="page-container">

        <Header />

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

          <div className="case-content">
            <Case />

            <Link to="/cases"
              className="button">
              Ver todos os cases
            </Link>
          </div>

        </main>
      </div>

      <Footer />

    </div>
  )
}

export default index
