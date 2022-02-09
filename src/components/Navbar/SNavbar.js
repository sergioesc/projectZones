import styled from "styled-components";



export const ContainerNav = styled.div`
    display: flex;
    width: 100%;
    height: 55px;
    background: #141E30;
    background: -webkit-linear-gradient(to right, #243B55, #141E30);
    background: linear-gradient(to right, #243B55, #141E30); 
    color: white;
    margin-bottom: 20px;
`;

export const LogoContainer = styled.div`
    width: 150px;
    margin: auto;
    text-align: center;
`;

export const MenuContainer = styled.div`
    width: calc(100% - 150px);

    @media (max-width:750px){
        position: absolute;
        width: 100%;
        top: 55px;
        background-color: black;
        opacity: ${(props) => (props.extendShowMenu ? "1" : "0")};
        transition: all ease .3s
    }
`;

export const MenuContainerList = styled.ul`
    display: flex;
    margin: auto;
    float: right;
    @media (max-width:750px ){
        flex-direction: column;
        width: 100%;
        text-align: center;
        & li{
            margin: 30px auto;
        }
    }

`;

export const MenuItem = styled.li`
    list-style: none;
    margin: 0 50px;

`;
export const ItemLink = styled.p`

`;
export const MobileIcon = styled.div`
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 25px;
    display: none;
    @media (max-width: 750px){
        display: block
    }
    
`;

