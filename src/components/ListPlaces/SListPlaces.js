import styled from "styled-components"


export const ListContainer = styled.div`
    width: 90%;
    margin: 70px auto;
`;




//Lista de zonas



export const ListSelection = styled.div`
    margin: auto;
    text-align: center;

`;
export const ListForm = styled.form`    
`;
export const ListFormLabel = styled.h2`
    font-size: 30px;
    @media (max-width: 450px){
        font-size: 24px;
    }
`;
export const ListFormDataList = styled.input`
    margin-left:35px;
    border:1px solid #d7d7d7;
    padding:10px 20px;
    border-radius:20px;
    font-size: 24px;
    width: 80%;
    max-width: 900px;
    background-color: rgba(255,255,255, .1);
    color: white;
    margin: auto;
    &:hover{
        background-color: rgba(255,255,255, .3);
    }
    &:focus {
        box-shadow: 0 0 3px 1px #7cdaff;
        border: none;
    }
    @media (max-width: 450px){
        padding: 5px 10px;
    }
`;
export const DataListOption = styled.option`
    background:#fff;
    border-color:#41c9ff;
    border-radius:2px;
    line-height: 18px;
    outline:none;
    box-shadow: 0 0 3px 1px #c00;
   

    &:focus{
        box-shadow: 0 0 3px 1px #7cdaff;
    }
`;



//Lista de lugares

export const ListInner = styled.div`
 margin: 70px auto;
 width: 100%;

`;

export const ListText = styled.div`
    & p{
        font-size: 21px;
    }
    & p a{
        color: white;
        border-bottom: 2px solid white;
    }
    @media (max-width: 450px){
        & p{
            font-size: 14px;
        }
    }
`;

export const ResultContainer= styled.div`
    color: white;
    border-radius: 40px;
`;



export const ResultInner = styled.div`
    padding: 10px;
    width: 95%;
    margin: auto;
    @media (max-width: 1000px){
        width: 100%;
    }
    
`;


export const Result = styled.div`
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border-bottom: 2px solid rgba(0,0,0,.1);
    height: 220px;
    position: relative;
    background-color: rgba(200,200,200,.15);
    border-radius: 20px;
    &:hover{
        transform: scale(1.05);
        border-radius: 40px;
        padding: 20px;
        transition: all ease .6s;
    }
    @media (max-width: 750px){
        position: relative;
        height: 230px;
        padding: 0
    }
    @media (max-width: 450px){
        height: 210px;
        &:hover{
            transform: none;
            padding: 0px;
        }
    }
    
`;






export const ImgContainer = styled.div`
    width: 40%;
    max-width: 500px;
    height: 100%;
    position: relative;
    font-size: 15px;
    color: white;
    & a{
        width: 100%;
        height: 100%;
        color: white;
    }
    @media (max-width: 750px){
        width: 100%;
        max-width: none;
        opacity: .8;
    }
`;
export const ResultImg = styled.img`
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    width: 100%;
`;


export const ResultDescription = styled.div`
    margin:0 40px;
    width: 60%;
    @media (max-width: 820px){
        margin: 0 15px;
    }
    @media (max-width: 750px){
        position: absolute;
        width: 90%;
    }   
`;

export const ResultTittle = styled.div`
    position: relative;

     & svg{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 24px;
        cursor: pointer;
    }
    @media (max-width: 750px){
        margin-top: 20px;
    }
`;

export const ResultSmall = styled.small`
    font-size: 12px;
`;

export const Resulth1 = styled.h1`
    margin: 0;
    color: white;
    @media (max-width: 450px){
        font-size: 21px;
    }
`;

export const ResultProperietes = styled.p`
    margin: 30px auto;
    @media (max-width: 1250px){
        margin: 20px auto;  
    }
    @media (max-width: 820px){
        margin: 10px auto;
    }
    @media (max-width: 750px){
        display: none;
    }
   
`;

export const ResultPriRat = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 750px){
        margin-top: 105px;
    }
    @media (max-width: 450px){
        font-size: 14px;
    }
    @media (max-width: 300px){
        margin-top: 85px;
    }
`;

export const ResultRat = styled.p`
    & svg{ 
        color: rgb()
    }

`;

export const ResultPri = styled.p`
`;

