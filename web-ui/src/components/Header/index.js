import React from 'react';
import { Button, Header as Head, Heading } from 'grommet';

function Header({title, icon, showMenu, setShowMenu}) {
    return (
        <Head
            background='brand'
            justify='start'
            align='center'
        >
            <Button
                margin='small'
                icon={icon}
                onClick={() => setShowMenu(showMenu => !showMenu)}
            />
            <Heading level='3' margin='xsmall'>{title}</Heading>
        </Head>
    );
}

export default Header;
