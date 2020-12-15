import React from 'react';
import { Link } from 'react-router-dom';

import Case from '../../components/case/Case';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import '../Home/index.css';

const Cases = () => {

  return (
    <div id="page-home">
      <div className="page-container">

        <Header />

        <main>
          <div className="case-content">
            <Case />
          </div>
        </main>

      </div>

      <Footer />

    </div>
  )
}

export default Cases
