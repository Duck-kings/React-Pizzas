import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Overlay } from './Overlay';

export const Layout: React.FC = () => {
    return (
        <>
            <Overlay />
            <Header />
            <Outlet />
        </>
    )
}