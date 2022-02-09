import styled from 'styled-components'



export const CardContainer = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 500px);
`;
export const CardInner = styled.div`
    width:400px;
    box-shadow: 15px 20px 20px 2px rgba(0,0,0,.6);
    border-radius: 10px;
    background-color: white;
    color: black;
    min-height: 505px;
`;
export const CardImgContainer = styled.div`
    width: 90%;
    height: 300px;
    margin:auto;
    padding: 20px 20px 0 20px;
`;
export const CardImg = styled.img`
    width: 100%;
    height: 100%;
    margin:auto;
    object-fit: cover;
    border-radius: 10px;

`;
export const CardTextContainer= styled.div`
    width: 90%;
    margin: auto;
    position: relative;
`;
export const CardTitle = styled.h2`
    position: absolute;
    top: -40px;
    color: white;
    margin:0;
    font-size: 30px;
    left:5px;

`;
export const CardTitleDescription = styled.small`
    margin: 2px auto;
`;
export const CardDescription = styled.p`

`;
export const CardReadMore = styled.div`
    text-align: end;
    padding: 10px;
    & a{
        color: black;
    }
`;
