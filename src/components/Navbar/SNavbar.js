import styled from "styled-components";



export const ContainerNav = styled.div`
    display: flex;
    width: 100%;
    height: 55px;
    background-color: transparent;
    color: white;
    margin-bottom: 20px;
    & a{
            color: white;
        }
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
        top: ${(props) => (props.extendShowMenu ? "55px": "-100%")};
        background: #8E0E00;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        opacity: ${(props) => (props.extendShowMenu ? "1" : "0")};
        transition: all ease .3s;

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
        display: block;
    }
    
`;


