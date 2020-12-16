import React from 'react';
import './case.css';

interface CaseInterface {
  id: number,
  foto: string,
  nome: string,
  descricao: string,
  link: string
}

const Case = () => {

  const [cases, setCase] = React.useState<CaseInterface[]>([]);

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://igorsantos3d.com/portfolio/portfolio.json";
  React.useEffect(() => {
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((json) => setCase(json));
  }, []);

  return (
    <div>

      {cases.map(caseItem => {
        return (
          <div key={caseItem.id} className="case-item">
            <img src={caseItem.foto} alt={caseItem.nome} />

            <div className="description">
              <div>
                <h3>{caseItem.nome}</h3>
                <p>{caseItem.descricao}</p>
              </div>

              <a href={caseItem.link}
                className="button"
                target="_blank"
                rel="noreferrer">
                Acesse o site
            </a>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Case
