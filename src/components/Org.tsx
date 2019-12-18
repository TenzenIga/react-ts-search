import React from 'react'
import { Store } from './context'
import {ISuggestion} from './interface';
import Empty from './Empty';
//check if object in Array

export default function Org() {
  const {state, dispatch} = React.useContext(Store);
  const {selected} = state
  if(Object.entries(selected).length === 0){
    return <Empty />
  }else{  
  return (
          <div className='org'>
      <h3 className='org-title'>{selected.value}</h3>
          <div className='org-body'>
              <div className='org-body__info'>
                <p className='org-heading'>Юридический адрес</p>
        <p className='org-text'>{selected.data.address.unrestricted_value}</p>
                <p className='org-heading'>Генеральный директор</p>
        <p className='org-text'>{selected.data.management.name}</p>
              </div>
              <ul className='org-body__data'>
                <li><span>ИНН</span>{selected.data.inn}</li>
                <li><span>КПП</span>{selected.data.kpp}</li>
                <li><span>ОГРН</span>{selected.data.ogrn}</li>
              </ul>
          
          </div>
          
            <button className='org-btn' onClick={()=>dispatch({type:'SAVE', payload:selected})}>Сохранить</button>
            
        </div>
        )
  }
}