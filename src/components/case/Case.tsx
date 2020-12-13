import React from 'react';
import './case.css';

import imgCase from '../../images/cases/img.png';

const Case = () => {
  return (
    <div className="case-item">
      <img src={imgCase} alt="Delta Super" />

      <div className="description">
        <div>
          <h3>Delta Super Mercados</h3><p></p>
          <a href="https://deltasuper.com.br"
            target="_blank" rel="noreferrer">
            deltasuper.com.br
                </a>
          <p>Site desenvolvido para Delta Super Mercados</p>
        </div>

        <a href="https://deltasuper.com.br"
          className="button"
          target="_blank"
          rel="noreferrer">
          Acesse o case
              </a>

      </div>
    </div>
  )
}

export default Case
