import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoConatiner = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImage = styled.img`
  margin-right: 10px;
`

function Logo() {
    return (
        <LogoConatiner>
          <LogoImage
            src={logo}
            alt='logo'
            className='logo-img'>
          </LogoImage>
          <p><strong>Alura</strong>Books</p>
        </LogoConatiner>
    );
}

export default Logo;