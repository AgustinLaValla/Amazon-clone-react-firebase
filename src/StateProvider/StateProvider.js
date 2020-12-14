import React, { createContext } from 'react';

export const StateContext = createContext(null);

export default function StateProvider({children, initialState, reducer}) {
    return (
        <StateContext.Provider value={React.useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateProvider = () => React.useContext(StateContext);

