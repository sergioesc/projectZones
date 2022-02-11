import React, {useState} from 'react'

import {ContainerNav, ItemLink, LogoContainer, MenuContainer, MenuContainerList, MenuItem, MobileIcon} from './SNavbar.js'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'


const Navbar = () =>{
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    const handleCloseShow = () => {
        setShow(false)
    }
    return(
        <ContainerNav>
            <LogoContainer onClick={handleCloseShow}>
                <Link to="/projectZones">LOGO</Link>
            </LogoContainer>
            <MenuContainer extendShowMenu={show}>
                <MenuContainerList >
                    <MenuItem onClick={handleCloseShow}>
                        <Link to="/projectZones">
                            <ItemLink>INICIO</ItemLink>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseShow}>
                        <Link to="/projectZones/acerca">
                            <ItemLink>ACERCA DE</ItemLink>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseShow}>
                        <Link to="/projectZones/registrarse">
                            <ItemLink>REGISTRARSE</ItemLink>
                        </Link>
                    </MenuItem>
                </MenuContainerList>
            </MenuContainer>
            <MobileIcon>
                <FontAwesomeIcon icon={show ? faTimes : faBars } onClick={handleShow}/>
            </MobileIcon>
        </ContainerNav>
    )
}
export default Navbar