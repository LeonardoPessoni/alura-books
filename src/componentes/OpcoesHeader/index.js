import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  transition: all 0.5s ease;
  &:hover{
    background-color: rgba(0, 71, 115, 0.1);
  }
`
const Opcoes = styled.ul`
  display: flex;
`
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
          { textoOpcoes.map( (texto) => (
            <Link to={ `/${texto.toLowerCase()}` }><Opcao><p>{texto}</p></Opcao></Link>
          ) ) }
        </Opcoes>
    );
}

export default OpcoesHeader;