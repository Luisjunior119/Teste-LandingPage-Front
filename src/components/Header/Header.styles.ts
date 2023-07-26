import styled from "styled-components";
import Frame9 from "../../assets/Frame9.png";


export const Container = styled.div``;
export const Navbar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Logo = styled.div`
    width: 65px;
    height: 65px;
`;

export const Navigation = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    a{
        font-size: 20px;
    transition: 0.50s;
    }
    a:hover{
        opacity: 80%;

    }
`;

export const HeaderContainer = styled.div`
    background-image: url(${Frame9});
    background-position: top;
    background-size: cover;
    height: 700px;
    width: 100%;
    top: 0;
    
    a {
        color: #fff;
    }
`;

export const SignUser = styled.div`
    display:flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;

    transition: 80%;
    
    &:hover{
        opacity: 80%;
    }
`;