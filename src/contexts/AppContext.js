import {Position, Toaster} from '@blueprintjs/core';
import React from 'react';

const toaster = Toaster.create({
    position: Position.BOTTOM_RIGHT,
    canEscapeKeyClear: true,
    maxToasts: 1,
    usePortal: true,
});

export const AppContext = React.createContext();

export const AppContextProvider = (props) => {
    return (
        <AppContext.Provider
            value={{
                toaster,
            }}>
            {props.children}
        </AppContext.Provider>
    );
};
