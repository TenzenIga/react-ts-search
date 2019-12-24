import React, {useContext} from 'react'
import { Store } from '../../../context/context'
import {ISuggestion} from '../../../iterface/interface';
import Empty from './Empty';

export default function Org() {
  const {state, dispatch} = useContext(Store);
  const {savedOrgs} = state;
  const selected:ISuggestion = state.selected
  const isSaved = state.savedOrgs.filter((org:ISuggestion)=> org.data.ogrn === selected.data.ogrn )

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
        <p className='org-text'>{selected.data.management ? selected.data.management.name : null}</p>
              </div>
              <ul className='org-body__data'>
                <li><span>ИНН</span>{selected.data.inn}</li>
                <li><span>КПП</span>{selected.data.kpp}</li>
                <li><span>ОГРН</span>{selected.data.ogrn}</li>
              </ul>
          </div>
        {
          isSaved.length ? 
          <div className='org-saved'>
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.4912 0.274212C16.0699 0.711417 16.1698 1.51617 15.7144 2.07168L7.31937 12.3116C7.063 12.6244 6.6697 12.8048 6.2552 12.7999C5.84069 12.795 5.45215 12.6053 5.20388 12.2866L0.26565 5.94758C-0.175367 5.38146 -0.0548333 4.57932 0.53487 4.15594C1.12457 3.73256 1.96014 3.84827 2.40115 4.41439L6.29863 9.41744L13.6189 0.488418C14.0743 -0.0670904 14.9126 -0.162994 15.4912 0.274212Z" fill="#B9B9B9"/>
          </svg>
          <span>Сохранено</span>
          </div>
           :
          <button
           className='org-btn'
           onClick={()=>dispatch({type:'SAVE', payload:[...savedOrgs, selected]})}>
            Сохранить
          </button>
        }        
         
            
        </div>
        )
  }
}