import styled from "styled-components";
import { NavLink } from "react-router-dom";

import BackgroudImage from "../images/bc03fcadd378b93dbf934bdbbce25b20.jpg";

const Header = styled.header`
    background: url(${BackgroudImage}) no-repeat center;
    background-size: cover;
    height: 40vw;
`
const HeaderNavigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    max-width: 1620px;
    margin: 0 auto;
    padding: 0 20px;
    border-bottom: 1px solid white;
`
const NavigationList = styled.ul`
    display: flex;

    & li {
        margin-left: 20px;
    }
`

const activeClassName = 'nav-item-active'

const NavigationLink = styled(NavLink).attrs({ activeClassName })`
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    transition: .7s;
    cursor: pointer;
    font-weight: 500;

   &.${activeClassName} {
       color: red;
     }

    &:hover {
        color: yellow;
    }
`
const NavigationBar = () => {
    return (
        <Header>
            <HeaderNavigation>
                <NavigationLink to="/welcome">S</NavigationLink>
                <NavigationList>
                    <li>
                        <NavigationLink to="/music">music</NavigationLink>
                    </li>

                    <li>
                        <NavigationLink to="/favourite-music">favourites</NavigationLink>
                    </li>

                    <li>
                        <NavigationLink to="/welcome">MUSIC TITLE</NavigationLink>
                    </li>
                    <li>
                        <NavigationLink to="/my-playlist">playlists</NavigationLink>
                    </li>
                    <li>
                        <NavigationLink to="/create-playlist">create playlist</NavigationLink>
                    </li>
                </NavigationList>
                <NavigationLink to="/welcome">P</NavigationLink>
            </HeaderNavigation>
        </Header>
    )
}

export default NavigationBar;