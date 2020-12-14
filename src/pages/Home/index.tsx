import React from 'react';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
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
                A programação entrou por acaso em minha vida por volta de 2013.
                Comecei de forma totalmente autodidata, para supri uma necessidade 
                que havia na empresa que trabalhava. Fiquei encantado e apaixonado 
                por FrontEnd, e desde então não sai mais da área.
                <br /><br />
                No meu tempo livre me dedico a dois hobbies, escultura 3D e RPG. 
                Inclusive sou co-criador de um podcast de histórias e aventuras de RPG.
                <br /><br />
                Também divido parte do meu tempo com projetos pessoais.
              </p>

              <a href="https://www.instagram.com/falaigors/"
                className="btn-social">
                <FiInstagram size={26} />
              </a>
              <a href="https://www.linkedin.com/in/falaigor/"
                className="btn-social">
                <FiLinkedin size={26} />
              </a>
              <a href="https://github.com/falaigor"
                className="btn-social">
                <FiGithub size={26} />
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
