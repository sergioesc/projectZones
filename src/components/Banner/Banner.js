import React, { useState } from 'react'
import {BannerContainer, BannerH1, BannerSearchContainer, SearchBox, Search, Button} from './SBanner.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Banner = () =>{
    const [changeBanner, setChangeBanner] = useState(false)
    const TimeChange = () =>{
        setTimeout(function(){
            setChangeBanner(!changeBanner)
        },6000)
    }
    TimeChange()

    const getSearchValue = (e) =>{
        console.log(e.target.value)
    }
    return(
        <BannerContainer changeBackground = {changeBanner}>
            <BannerSearchContainer>
                <BannerH1> Encunetra nuevos lugares</BannerH1>
                <SearchBox>
                    <Search placeholder='Buscar...' type="search" onChange={getSearchValue}/>
                    <Button >
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </SearchBox>
            </BannerSearchContainer>
        </BannerContainer>
    )
}

export default Banner