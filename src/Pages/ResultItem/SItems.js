import styled from 'styled-components'

export const ItemContainer = styled.div`
    width: 90%;
    margin: 30px auto;   
`;
export const ItemTitle = styled.h1`
    font-size: 47px;
    @media (max-width:750px){
        text-align: center;
        font-size: 33px;
    }
`;




//Working with the images

export const ImgContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 60% 40%;
    grid-template-rows: 600px;
    column-gap: 10px;
    margin: 40px auto;   
    width: 100%;
    justify-content: center;
    @media (max-width:1000px){
        grid-template-columns: 50% 50%;
    }
    @media (max-width:750px){
        grid-template-columns: 90%;
        grid-template-rows: 400px 150px;
        row-gap: 10px;
    }
    @media (max-width:500px){
        grid-template-rows: 300px 100px;
    }

`;  
export const ImgItemFirstContainer = styled.a`
    width: 100%;
    height:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
export const ImgItemSecondaryContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    grid-template-rows:295px 295px;
    gap: 10px;
    @media (max-width: 750px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
    }
    @media (max-width:500px){
        grid-template-rows: 100px;   
    }
`;
export const ContainerImgSecond = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
export const ImgHover= styled.div`
    width: 100%;
    height: 100%;
    &:hover{
        background-color: rgba(0,0,0,.5);
        transition: all ease .3s;
        cursor: pointer;
    }
`;



//Working with the description

export const DescriptionContainer = styled.div`
`;
export const MapContainer = styled.div`
    margin: 70px auto;
`;


export const MapContainerDirMap = styled.div`
    display:flex;
    width: 100%;
    margin: auto;
    @media (max-width:1000px){
        display: block;
    }
`;
export const MapContainerDir = styled.div`
    width: 60%;
    @media (max-width:1000px){
        width: 100%;
        margin: auto;
    } 
`;
export const MapContainerMap = styled.div`
    width: 40%;
    height: 130px;
    line-height: 130px;
    background: url("https://play-lh.googleusercontent.com/FQx43QTaAqeOtoTLylK3WIs7ySKuGS8AurXNA1Kj34m6w6CjavF4Oj3s5DB6xZZ7DS63") no-repeat center;
    background-size: cover;
    text-align: center;
    cursor: pointer;
    margin: 0 40px;
    @media (max-width:1000px){
        width: 100%;
        margin: 40px auto;
    }
`;
export const MapParrafo = styled.p`
    margin: 10px auto;
`;
export const MapTittle2 = styled.h2`
`;
export const MapParrafo2= styled.p`
    background-color: rgba(0,0,0,.7);
    margin: auto;
    vertical-align: middle;
    & a{
        color: white;
    }
    &:hover{
        background-color: rgba(0,0,0,.8);
        transition: all ease .3s;
    }
    & span{
        color: red;
    }

`;





export const DescriptionAbout = styled.h1`
`;
