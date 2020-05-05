import {
    Alignment,
    Classes,
    Icon,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from '@blueprintjs/core';
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>
                    <Link to={'/'}>{process.env.REACT_APP_APP_NAME}</Link>
                </NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
                <NavbarDivider />
                <Link
                    to={'/'}
                    className={[Classes.BUTTON, Classes.MINIMAL].join(' ')}>
                    <Icon icon={'home'} />
                    <span className={Classes.BUTTON_TEXT}>Home</span>
                </Link>
                <Link
                    to={'/projects'}
                    className={[Classes.BUTTON, Classes.MINIMAL].join(' ')}>
                    <Icon icon={'projects'} />
                    <span className={Classes.BUTTON_TEXT}>Projects</span>
                </Link>
                <Link
                    to={'/blog'}
                    className={[Classes.BUTTON, Classes.MINIMAL].join(' ')}>
                    <Icon icon={'text-highlight'} />
                    <span className={Classes.BUTTON_TEXT}>Blog</span>
                </Link>
            </NavbarGroup>
        </Navbar>
    );
};

Header.propTypes = {};

export default Header;
