import React from 'react';
import { Link } from 'react-router-dom';

import Case from '../../components/case/Case';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './cases.css';

const Cases = () => {

  return (
    <div id="page-home">
      <div className="page-container">

        <Header />

        <main>
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

export default Cases
