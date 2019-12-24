import React, {useContext} from 'react';
import Heading from './Heading';
import Search from './Search/Search';
import {Store} from '../../context/context';
import SavedList from "./Saved/SavedList";
import TabController from './Tab/TabController';



export default function Main():JSX.Element{
    const {state} = useContext(Store); 
        return (
            <main className='app-main'>
            <Heading />
            <div className='tab'>
                <TabController>
                <div  data-name='Search' data-text='Новая организация'>    
              <Search  />
              </div>
              <div  data-name='Saved' data-text={`Сохраненные организации (${state.savedOrgs.length})`} >
              <SavedList  />
            </div>
                </TabController>
          
          </div> 
     </main>
        )
    }

