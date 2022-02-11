import React from 'react'
import { GridContainerMap, GridContainerSearch, HomeContainer, HomeContainerGrid, MapWhere, SearchWhere, WhereDescription, WhereDescription1, WhereText, WhereText1 } from './SHome.js'
import { Link } from 'react-router-dom'
 const Home = () => {
     return(
         <HomeContainer>    
             <HomeContainerGrid>
                 <GridContainerMap>
                     <MapWhere>
                        <Link to="/"> 
                            <WhereText>MAPA INTERACTIVO</WhereText>
                            <WhereDescription>Podras interactuar con un mapa en tiempo real con tecnologia de Google Maps.</WhereDescription>
                        </Link> 

                     </MapWhere>
                 </GridContainerMap>
                 <GridContainerSearch>
                     <SearchWhere>
                        <Link to="/buscar"> 
                            <WhereText1>BUSCADOR</WhereText1>
                            <WhereDescription1>Podras interactuar con el buscador en tiempo real con tecnoloogia nuestra.</WhereDescription1>
                        </Link>
                     </SearchWhere>
                 </GridContainerSearch>
             </HomeContainerGrid>
         </HomeContainer>
     )
 }

 export default Home

 //Acordate de arreglar el home.... 