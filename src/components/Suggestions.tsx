import React from 'react';
import {ISuggestion } from './interface';
import { Store } from './context';

export default function Suggestions():JSX.Element {
      
      const {state, dispatch} = React.useContext(Store);
      const {suggestions} = state;
      return (
        <>
         {suggestions.map((suggestion:ISuggestion, key:number):JSX.Element=>{
      return (
        <li className='suggestion-item' key={key} onClick={()=>dispatch({type:'SELECT',payload:suggestion})}  >
      <h4 className='suggestion-item__top'>{suggestion.value}</h4>
      <p className='suggestion-item__bottom'>789098768945 г. Санкт-Петербург {suggestion.data.inn} {suggestion.data.address.data.city}</p>
        </li>
      )
    })}
  </>   
  )
}
