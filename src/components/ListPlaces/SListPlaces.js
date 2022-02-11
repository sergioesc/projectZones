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
`;
export const ListFormDataList = styled.input`
    margin-left:35px;
    border:1px solid #d7d7d7;
    padding:10px 20px;
    border-radius:2px;
    font-size: 24px;
    width: 80%;
    max-width: 400px;
   
    &:hover{
        background:#cde4f7;
     border:1px solid #41c9ff;
    }
    &:focus {
        box-shadow: 0 0 3px 1px #7cdaff;
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
 width: 90%;
 cursor: pointer;
`;

export const ListText = styled.div`
    & p{
        font-size: 21px;
    }
    & p a{
        color: white;
        border-bottom: 2px solid white;
    }
`;

export const ResultContainer= styled.div`
    background-color: white;
    color: black;
    border-radius: 40px;

`;



export const ResultInner = styled.div`
    padding: 10px;
    width: 95%;
    margin: auto;
`;


export const Result = styled.div`
    display: flex;
    margin: 10px auto;
    padding: 20px 0;
    border-bottom: 2px solid rgba(0,0,0,.1);
    height: 250px;
    position: relative;
    background-color: white;
    &:hover{
        transform: scale(1.1);
        border-radius: 40px;
        padding: 20px;
        transition: all ease .6s;
    }
`;





export const ImgContainer = styled.div`
    width: 40%;
    max-width: 500px;
    height: 250px;
    position: relative;
    font-size: 15px;
    color: black;
    & a{
        width: 100%;
        height: 100%;
    }
`;
export const ResultImg = styled.img`
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
    width: 100%;
`;
// export const ImgSlideLeft = styled.div`
//     position: absolute;
//     left: 0;
//     top: 45%;
//     padding:7px 10px;
//     margin-left: 5px;
//     background-color:white;
//     border-radius: 50%; 
//     transition: all ease .1s;
//     &:hover{
//         transform: scale(1.1)
//     }
// `;
// export const ImgSlideRight = styled.div`
//     position: absolute;
//     right: 0;
//     top: 45%;
//     padding:7px 10px;
//     margin-right: 5px;
//     background-color: white;
//     border-radius: 50%; 
//     transition: all ease .1s;
//     &:hover{
//         transform: scale(1.1)
//     }
// `;





export const ResultDescription = styled.div`
    margin: 0 40px;
   width: 60%;
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
`;

export const ResultSmall = styled.small`
    font-size: 12px;
`;

export const Resulth1 = styled.h1`
    margin: 0;
`;

export const ResultProperietes = styled.p`
    margin: 30px auto;
`;

export const ResultPriRat = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const ResultRat = styled.p`
    & svg{ 
        color: rgb(36, 59, 84) 
    }

`;

export const ResultPri = styled.p`
`;

