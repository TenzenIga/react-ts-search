import React, {createContext } from 'react';
import {ISuggestion, IState, IAction} from '../iterface/interface';





export const AppContext = createContext('');

const initialState:IState = {
    suggestions:[],
    selected:{} as ISuggestion,
    savedOrgs:[]
}


export const Store = React.createContext<IState | any>(initialState);




function reducer(state:IState, action:IAction){
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, suggestions:action.payload }
        case 'SELECT':
            return {...state, suggestions:[], selected:action.payload}
        case 'SAVE':
            return {...state, savedOrgs:action.payload }
        case 'DELETE':
            return {...state, savedOrgs:action.payload }
        default:
            return state
    }
}

export function StoreProvider(props:JSX.ElementChildrenAttribute): JSX.Element{
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}