import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
}
`
const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
          { icones.map( (icone) => (
            <Icone><img src={icone} alt=''></img></Icone>
          ) ) }
        </Icones>
    );
}

export default IconesHeader;