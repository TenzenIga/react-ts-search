import React, { useState } from 'react'
import TabButton from './TabButton'


export default function TabController(props:any) {
    const [activeTab, setActiveTab] = useState('Search');
    const {children} = props; 
    return (
        <>
        <div className='tab-controller'>

            {
                children.map((child:any)=>{
                    const name = child.props['data-name'];
                    const text = child.props['data-text'];
                    return(
                        <TabButton
                            onClick={
                                ()=>{setActiveTab(name)}
                            } 
                            activeTab={activeTab}
                            name={name}
                            text={text}
                            key={name}
                            />
                    ) 
                })
            }
        </div>
        <div className='tab-content'>
        {children.map((child:any) => {
                if (child.props['data-name'] !== activeTab) return undefined;
                return child.props.children;
              })}
        </div>
            </>
    )
}
