import React from 'react';
import Heading from './Heading';
import TabController from './TabController';
import Empty from './Empty';
import Search from './Search';

import {Store} from './context';
import Suggestions from './Suggestions';
import Org from './Org';



export default function Main():JSX.Element{
    const {state} = React.useContext(Store);  
   
    const props = {
        suggestions:state.suggestions
    }
   

        return (
            <main className='app-main'>
            <Heading />
            <div className='tab'>
                <TabController />
                <div className='tab-content'>
                <Search  />
                {state.suggestions.length > 0 ?
                (<ul className='suggestions'>
                     <Suggestions  />
                </ul>)
                : (<Org />) }
            </div>
          </div> 
     </main>
        )
    }

