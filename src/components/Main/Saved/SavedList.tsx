import React, { useContext } from 'react';
import { Store } from '../../../context/context';
import SavedItem from './SavedItem';
import {ISuggestion} from '../../../iterface/interface';

export default function SavedList() {
    const {state} = useContext(Store);
    const {savedOrgs} = state;
    return (<div className='saved'>
        <div className='saved-list'>
            {
            savedOrgs.map((org:ISuggestion, key:number)=>{
                return <SavedItem key={key} org={org} />
            })
            }
            
        </div>
    </div>);
}
