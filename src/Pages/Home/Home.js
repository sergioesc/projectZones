import React from 'react'
import Banner from '../../components/Banner/Banner.js'
import ZoneParaguari from '../../components/Zones/Paraguari/Paraguari.js'
import ZoneAsuncion from '../../components/Zones/Asuncion/Asuncion.js'
import { HomeContainer, HomeTitleZones } from './SHome.js'
 const Home = () => {
     return(
         <HomeContainer>
            <Banner />
            <HomeTitleZones>
                Los sitios más visitados de
            </HomeTitleZones>
            <ZoneParaguari />
            <ZoneAsuncion />
         </HomeContainer>
     )
 }

 export default Home