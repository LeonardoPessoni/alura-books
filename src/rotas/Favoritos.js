import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoritos } from "../Servicos/favoritos";
import livroImg from "../imagens/livro.png";

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 10px 20px;
  width: 100vw;
  height: 100vh;
`;
const Resultado = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  margin-bottom: 20px;
  cursor: pointer;

  p {
      width: 200px;
      margin: 0;
  }

  img {
      width: 100px;
  }

  div:hover {
      transition: all 0.8s ease;
      background-color: rgba(255, 255, 255, 0.03);
  }
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos();
    setFavoritos(favoritosDaApi);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <Resultado>
        {favoritos.map((favorito) => (
          <div className="item">
            <p>{favorito.nome}</p>
            <br />
            <img src={livroImg} alt="" />        
          </div>
        ))}
      </Resultado>
    </AppContainer>
  );
}

export default Favoritos;
