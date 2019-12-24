import React from 'react'
import UpIcon from './UpIcon';
import DownIcon from './DownIcon';


type ButtonProps = {
    show:boolean
    setShow:(event: React.MouseEvent<HTMLDivElement>)=>void
}

export default function ShowButton(props:ButtonProps) {
        const {show, setShow} = props;
    return (
        <>
        {
            show ? (
                
                <div onClick={setShow} className='saved-item__detail' >
                <span>скрыть подробности</span>
                <UpIcon />   
             </div>
         ) 
         :
        (
            <div onClick={setShow} className='saved-item__detail' >
                <span>подробнее</span>
                <DownIcon />   
                </div>
         )
        }
      </>  
    )
}
