import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";

const HeaderComponents = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderComponents>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderComponents>
    );
}

export default Header;
