import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComponents = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    &:active {
        color: #000;
    }
`;

function Header() {
    return (
        <HeaderComponents>
            <StyledLink to="/">
                <Logo />
            </StyledLink>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderComponents>
    );
}

export default Header;
