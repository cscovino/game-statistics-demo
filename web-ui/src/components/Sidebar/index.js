import React from 'react';
import { Nav, Sidebar as SB } from 'grommet';
import SidebarButton from '../SidebarButton';

function Sidebar({routes, iconsMap}) {
    return (
        <SB
            overflow="auto"
            background="light-2"
            pad="none"
        >
            <Nav>
            {routes.map((route, index) => (
                <SidebarButton key={route.name} routes={route} index={index} iconsMap={iconsMap} />
            ))}
            </Nav>
        </SB>
    );
}

export default Sidebar;
