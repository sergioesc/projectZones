import React from 'react'
import { GridContainerMap, GridContainerSearch, HomeContainer, HomeContainerGrid, MapWhere, SearchWhere, WhereDescription, WhereDescription1, WhereText, WhereText1 } from './SHome.js'
import { Link } from 'react-router-dom'
 const Home = () => {
     return(
         <HomeContainer>    
             <HomeContainerGrid>
                 <GridContainerMap>
                     <MapWhere>
                        <Link to="/projectZones"> 
                            <WhereText>MAPA INTERACTIVO</WhereText>
                            <WhereDescription>Podras interactuar con un mapa en tiempo real con tecnologia Google Maps.</WhereDescription>
                        </Link> 

                     </MapWhere>
                 </GridContainerMap>
                 <GridContainerSearch>
                     <SearchWhere>
                        <Link to="/projectZones/buscar"> 
                            <WhereText1>BUSCADOR PROJECT</WhereText1>
                            <WhereDescription1>Podras interactuar con el search en tiempo real con nuestra propia tecnologia</WhereDescription1>
                        </Link>
                     </SearchWhere>
                 </GridContainerSearch>
             </HomeContainerGrid>
         </HomeContainer>
     )
 }

 export default Home

 //Acordate de arreglar el home.... 