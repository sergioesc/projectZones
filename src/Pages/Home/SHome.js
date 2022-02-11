import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 90%;
    margin: auto;
`;
export const  HomeContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
`;
export const GridContainerMap = styled.div`
    background: url("https://guiauniversitaria.mx/wp-content/uploads/2020/02/Estas-son-las-5-nuevas-funciones-que-implemento%CC%81-Google-Maps.jpg") center no-repeat;
    background-size: cover;
`;
export const GridContainerSearch = styled.div`
    background: url("https://ep01.epimg.net/elviajero/imagenes/2019/09/18/actualidad/1568802600_753970_1568805783_noticia_normal.jpg") center no-repeat;
    background-size: cover;
`;

export const MapWhere= styled.div`
    width: 100%;
    text-align: center;
    background-color: rgba(0,0,0,.6);
    padding: 250px 0;
    cursor:pointer;
    &:hover p{
        opacity: 1;
        transition: all ease .3s;
    }
    & a{
        color: white;
        width: 100%;
        height: 100%;
    }
`;
export const WhereText = styled.h1`
    margin: auto;
    & a{
        color: white;
    }
`;
export const WhereDescription= styled.p`
    width: 50%;
    margin: 20px auto;
    opacity: 0;
`;



export const SearchWhere = styled.div`
    width: 100%;
    text-align: center;
    background-color: rgba(0,0,0,.6);
    padding: 250px 0;   
    cursor:pointer;
    &:hover p{
        opacity: 1;
        transition: all ease .3s;
    }
    & a{
        color: white;
        width: 100%;
        height: 100%;
    }
`;
export const WhereText1 = styled.h1`
    margin: auto;
    
`;
export const WhereDescription1 = styled.p`
    width: 50%;
    margin: 20px auto;
    opacity:0;
`;