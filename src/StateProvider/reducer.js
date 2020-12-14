export const initialState = {
    basket: [],
    user: null
}

export function reducer(state, action) {

    switch (action.type) {

        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, { ...action.payload }]
            }

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload)
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }

        case 'CLEAR_BASKET':
            return {
                ...state,
                basket: []
            }

        default:
            return state;
    }
}

//Selector
export const getBasketTotalSelector = (basket) => basket?.reduce((acc, cur) => acc + cur.price, 0);