import React from 'react'
import {Routes, Route } from 'react-router-dom'
import dataJSON from '../../data/data.json'
import Item from './Item.js'
function CardResultItem(){
    return(
        <Routes>
            {
             dataJSON.map((val, key) => {
              return <Route exact path={"/projectZones/buscar/"+val.urlInner} key={key} element={
              <Item 
                title={val.title}
                titleDescription={val.titleDescription}
                imgFirst= {val.imgUrl[4]}
                imgSecondary={val.imgUrl[1]}
                imgSecondary1={val.imgUrl[2]}
                imgSecondary2={val.imgUrl[3]}
                imgSecondary3={val.imgUrl[0]}
                direction={val.direction}
                directionMap={val.directionMap}
                descriptionLong1={val.descriptionLong1}
                descriptionLong2={val.descriptionLong2}
              />
            }/>
            })
          }
        </Routes>
    )
}

export default CardResultItem