import React from 'react'
import { CardContainer, CardDescription, CardImg, CardImgContainer, CardInner, CardReadMore, CardTextContainer, CardTitle, CardTitleDescription } from '../../CardStyle/SCard.js'
import data from '../../../data/data.json'
import { Link } from 'react-router-dom'
const Card2 = () => {        
    return(
        <CardContainer>
            {data.slice(3,6).map((data, i)=>
                (
                <CardInner key={i}>
                    <CardImgContainer>
                        <CardImg src={data.imgUrl} />
                    </CardImgContainer>
                    <CardTextContainer>
                        <CardTitle>
                          {data.title}
                        </CardTitle> 
                        <CardTitleDescription>
                            {data.titleDescription}
                        </CardTitleDescription>
                        <CardDescription>
                            {data.description}
                        </CardDescription>
                        <CardReadMore>
                            <Link to ="/">Leer más</Link>
                        </CardReadMore>
                    </CardTextContainer>    
                </CardInner>
                )
                
            )}
        </CardContainer>
    )
}
export default Card2