import React from 'react'

import { IconWrapper, MenuOption } from './NavOptionsElements'

const NavOptions = ({Icon, title}) => {
    return (
        <>
            {/* Represents a Menu Option in Navbar where there is a logo on top and writing below */}
            <MenuOption>
                {/* Icon */}
                <IconWrapper>
                    <Icon />
                </IconWrapper>
                {/* Writing Below */}
                <h3>{title}</h3>
            </MenuOption>
        </>
    )
}

export default NavOptions

