import React, {useContext} from 'react';
import {ISuggestion } from '../../../iterface/interface';
import { Store } from '../../../context/context';

export default function Suggestions():JSX.Element {
      
      const {state, dispatch} = useContext(Store);
      const {suggestions} = state;
      return (
        <>
         {suggestions.map((suggestion:ISuggestion, key:number):JSX.Element=>{
      return (
        <li className='suggestion-item' key={key} onClick={()=>dispatch({type:'SELECT',payload:suggestion})}  >
      <h4 className='suggestion-item__top'>{suggestion.value}</h4>
      <p className='suggestion-item__bottom'>{suggestion.data.inn} {suggestion.data.address.data.city}</p>
        </li>
      )
    })}
  </>   
  )
}
