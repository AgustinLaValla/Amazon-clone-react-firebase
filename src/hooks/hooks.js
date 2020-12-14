import React from 'react';
import { useStateProvider } from '../StateProvider/StateProvider';
import { auth } from '../db';

export const useAuthListener = () => {
    const [, dispatch] = useStateProvider();
    React.useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({ type: 'SET_USER', payload: authUser })
            } else {
                dispatch({ type: 'SET_USER', payload: null });
            }
        })
        return () => { }
    }, [])
};