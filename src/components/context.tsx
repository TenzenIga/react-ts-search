import React, {createContext, useState } from 'react';
import {ISuggestion, IState, IAction} from './interface';





export const AppContext = createContext('');



export const AppContextProvider: React.ComponentType = (props) =>{
    const [orgs, setOrgs] = useState('');
    const addOrg = () =>{
        console.log('Organisation added');
    }
    const deleteOrg = () =>{
        console.log('Organisation removed');
    }
    return(
        <AppContext.Provider value={orgs} >
            {props.children}
        </AppContext.Provider>
    );
};

// export const SuggestionsContext = createContext<SuggestionsContext | null>(null);

// export const SuggestionsContextProvider: React.ComponentType = (props) =>{
//     const [suggestions, setSuggestions] = useState<ISuggestions[]>([]);
//     return(
//         <SuggestionsContext.Provider value={{suggestions}}>
//             {props.children}
//         </SuggestionsContext.Provider>
//     )
// }



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
            break
        case 'SELECT':
            return {...state, suggestions:[], selected:action.payload}
            break
        case 'SAVE':
            return {...state, savedOrgs:action.payload }
        default:
            return state
            break;
    }
}

export function StoreProvider(props:JSX.ElementChildrenAttribute): JSX.Element{
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}