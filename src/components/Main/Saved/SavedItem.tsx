import React, {useState, useContext} from 'react'
import SavedItemHeader from './SavedItemHeader';
import ShowButton from './ShowButton';
import { ISuggestion, IAction } from '../../../iterface/interface';
import { Store } from '../../../context/context';


type savedOrgProp = {
  org:ISuggestion
}
export default function SavedItem(props:savedOrgProp) {
    const {org} = props
    const {state, dispatch} = useContext(Store);
    const [show, setShow] = useState(false)
    let className = 'saved-item__body';

    if (show === true) {
      className += ' open';
    }
    const deleteItem = (org:ISuggestion):IAction =>{
      const savedOrgs = state.savedOrgs.filter((item:ISuggestion)=> item !== org)
      return dispatch({
          type:'DELETE',
          payload:savedOrgs
      })
    }
    return (       
    <div className='saved-item'>
          <SavedItemHeader name={org.value} deleteItem={()=>deleteItem(org)} />
            <div className={className}>
            <p><span>ИНН</span>{org.data.inn}</p>
            {
              show && (<><p><span>КПП</span>{org.data.kpp}</p>
              <p><span>ОГРН</span>{org.data.ogrn}</p>
              <p><span>Юридический адрес</span>{org.data.address.data.city}</p>
              <p><span>Генеральный директор</span> {org.data.management && org.data.management.name} </p>
              </>
              )
            }
            <ShowButton setShow={()=>setShow(!show)} show={show} />
            </div>
    </div>
    )
}
