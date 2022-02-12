import React, { useState} from 'react'
import { ImgContainer, ListContainer, ListForm, ListFormDataList, ListFormLabel, ListInner, ListSelection, ListText, Result, ResultContainer, ResultDescription, Resulth1, ResultImg, ResultInner, ResultPri, ResultPriRat, ResultProperietes, ResultRat, ResultSmall, ResultTittle } from './SListPlaces.js'
import dataJSON from '../../data/data.json'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHeart, faStar} from '@fortawesome/free-solid-svg-icons'
import {faHeart as faHeart2} from '@fortawesome/free-regular-svg-icons'
const ListPlaces = () => {
    const [clickedIndex, setClickedIndex] = useState({})
    const [searchTerm,setSearchTerm] = useState('') 
    

    //valor del search
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)   
    }


    //Click al corazon
    const handleClick = (i) => () =>{
        setClickedIndex(state => ({
            ...state, 
            [i]: !state[i]
        }))
    }


    return(
        <ListContainer>
            <ListSelection>
                <ListForm action="" >
                    <ListFormLabel>
                        Encuentra el lugar que tienes en mente
                    </ListFormLabel>
                    <ListFormDataList type="text" onChange={handleSearch} />             
                </ListForm>
            </ListSelection>
            <ListInner>
                <ListText>
                    <p>
                        Encuentra los mejores lugares en NAMEPROJECT
                    </p>
                    <p>
                        Recuerda estar al tanto de las restricciones del coronavirus antes de viajar. <Link to="/projectZones/covid">Más informacion</Link>
                    </p>
                    <hr />
                </ListText>
                <ResultContainer>
                    <ResultInner>
                       {dataJSON.filter((val)=>{
                             if(searchTerm == ""){
                                  return val
                                }
                            else if(val.city.toLowerCase().includes(searchTerm.toLowerCase())){
                               return val;
                            }
                            }).slice(0, 6).map((val,key)=>{
                            return  <Result>
                                        <ImgContainer>
                                            <Link to={val.urlInner}>
                                                <ResultImg src={val.imgUrl[0]} key={key} />
                                            </Link>
                                        </ImgContainer>         
                                        <ResultDescription>
                                            <ResultTittle>
                                                <ResultSmall>
                                                    {val.titleDescription}
                                                </ResultSmall>
                                                <Link to={val.urlInner}>
                                                    <Resulth1>
                                                       {val.title} 
                                                    </Resulth1>
                                                 </Link> 
                                                <FontAwesomeIcon onClick={handleClick(key)}  icon={clickedIndex[key] ? faHeart : faHeart2}/>
                                            </ResultTittle>
                                            <ResultProperietes>
                                                {val.description}
                                            </ResultProperietes>
                                                <ResultPriRat>
                                                    <ResultRat><FontAwesomeIcon icon={faStar}/>{val.rating}</ResultRat>
                                                <ResultPri>{val.price}</ResultPri>     
                                         </ResultPriRat>
                                        </ResultDescription>
                            </Result>
                            })}
                    </ResultInner>
                </ResultContainer>
            </ListInner>
        </ListContainer>
    )
}

export default ListPlaces