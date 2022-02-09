import styled from 'styled-components'


export const BannerContainer = styled.div`
    width: 90%;
    background-image: ${(props) =>(props.changeBackground ? "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Salto_Suizo_de_Paraguay.jpg/800px-Salto_Suizo_de_Paraguay.jpg)" :  "url(https://static01.nyt.com/images/2017/12/03/travel/03HOURS-ASUNCION2-LISTY/03HOURS-ASUNCION2-jumbo.jpg?quality=75&auto=webp)" )};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all ease 3s;
    box-shadow: 2px 2px 15px 3px rgba(0, 0, 0, .6) ;
    margin: auto;
`;
export const BannerSearchContainer = styled.div`

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    padding:50px 0 120px 0;
`;

export const SearchBox = styled.div`
    background-color: white;
    width: 50%;
    margin: auto;
    display: flex;
    max-width: 600px;
    border-radius: 15px;
    & svg{
        cursor:pointer;
        margin: 0 10px;
        font-size: 18px;
    }

    @media (max-width: 600px){
        width: 70%
    }
`;

export const BannerH1 = styled.h1`
    color: white;
    font-size: 70px;
    width: 80%;
    font-weight: 900;
    margin: 50px auto;
    @media (max-width: 900px){
        font-size: 50px;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 50px;
        width: 80%

    }
    @media (max-width: 500px){
        font-size: 30px
    }
`;

export const Search = styled.input`
    border: none;
    padding: 12px 30px;
    border-radius:30px;
    width: 90%;
    font-size: 21px;
    @media (max-width: 500px){
        font-size: 18px;
    }
`;
export const Button = styled.button`
    border: none;
    background-color: white;
    border-radius: 30px;
`;