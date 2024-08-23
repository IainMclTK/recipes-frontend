import styled from "styled-components";

const primary = "#3f51b5";
const secondary = "#BBB";

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${secondary};
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
`;

export const NavItem = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #3f51b5;
        text-decoration: underline;
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    margin: auto;
    background-color: ${secondary};
`;

export const Main = styled.main`
    //background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 0 1rem;
`;
