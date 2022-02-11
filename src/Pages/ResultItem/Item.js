import React from 'react'
import { ContainerImgSecond, DescriptionAbout, DescriptionContainer, ImgContainer, ImgHover, ImgItemFirstContainer, ImgItemSecondaryContainer, ItemContainer, ItemTitle, MapContainer, MapContainerDir, MapContainerDirMap, MapContainerMap, MapParrafo, MapParrafo2, MapTittle2} from './SItems.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapPin} from '@fortawesome/free-solid-svg-icons'
function Item(props){
    return(
        <ItemContainer>
            <ItemTitle>
                {props.title}
            </ItemTitle>
            <ImgContainer>
                <ImgItemFirstContainer style={{backgroundImage: `url(${props.imgFirst})`}}>
                    <ImgHover />
                </ImgItemFirstContainer>
                <ImgItemSecondaryContainer>
                    <ContainerImgSecond style={{backgroundImage: `url(${props.imgSecondary})`}}>
                        <ImgHover />
                    </ContainerImgSecond>
                    <ContainerImgSecond style={{backgroundImage: `url(${props.imgSecondary1})`}}>
                        <ImgHover />
                    </ContainerImgSecond>
                    <ContainerImgSecond style={{backgroundImage: `url(${props.imgSecondary2})`}}>
                        <ImgHover />
                    </ContainerImgSecond>
                    <ContainerImgSecond style={{backgroundImage: `url(${props.imgSecondary3})`}}>
                        <ImgHover />
                    </ContainerImgSecond>
                </ImgItemSecondaryContainer>   
            </ImgContainer>

            <DescriptionContainer>
                <MapContainer>
                    <MapContainerDirMap>
                        <MapContainerDir>
                            <MapTittle2>Guía para llegar a {props.title}</MapTittle2>
                            <MapParrafo>{props.direction}</MapParrafo>
                        </MapContainerDir>
                        <MapContainerMap>
                            <MapParrafo2>
                                Abrir en <a href={props.directionMap} target="__blank"><span>Google Maps <FontAwesomeIcon icon={faMapPin} /> </span></a>
                            </MapParrafo2>
                        </MapContainerMap>
                    </MapContainerDirMap>
                </MapContainer>
                    <DescriptionAbout>Acerca del lugar </DescriptionAbout>
                    <MapParrafo>{props.descriptionLong1}</MapParrafo>
                    <MapParrafo>{props.descriptionLong2}</MapParrafo>
            </DescriptionContainer>
        
        </ItemContainer>
    )
}

export default Item