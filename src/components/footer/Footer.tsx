import React from 'react'
import { Link } from 'react-router-dom';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

import './footer.css';

const Footer = () => {
  return (
    <div id="footer">

      <div className="foot-content">
        <div className="info">
          <div className="contact">
            <h3>Contato</h3>
            <pre>
              Leme, SP<br />
              falaigors@gmail.com<br />
              <a href="/">19 97422 3710</a>
          </pre>
          </div>
          <div className="link">
            <h3>Links</h3>
            <li><Link to="/">About</Link></li>
            <li><Link to="/cases">Cases</Link></li>
          </div>

          <div className="social">
            <h3>Redes Sociais</h3>
            <div className="buttons">
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
          </div>
        </div>

        <div className="copy">
          Copyright 2020 - Todos os direitos reservados a Igor Santos
        </div>
      </div>
    </div>
  )
}

export default Footer
