import React from 'react'
import DeleteIcon from './DeleteIcon'

type SavedItemHeaderProps={
    name:string
    deleteItem:(event: React.MouseEvent<SVGSVGElement, MouseEvent>)=>void
}

export default function SavedItemHeader(props:SavedItemHeaderProps) {
    const {name, deleteItem} = props;
    
    return (
              <div className='saved-item__header'>
                    <h3>{name}</h3>
                <DeleteIcon  deleteItem={deleteItem} />             
            </div>
        
    )
}
