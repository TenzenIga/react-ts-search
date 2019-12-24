import React from 'react'

interface props{
    deleteItem:(event: React.MouseEvent<SVGSVGElement, MouseEvent>)=>void
} 

export default function DeleteIcon(props:props) {
    return (
        <svg onClick={props.deleteItem} className='saved-item__delete' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 0C5.8585 0 5.455 0.13875 5.1715 0.42225C4.88875 0.705 4.75 1.1085 4.75 1.5V2.25H0.25V3.75H1V15.75C1 16.9837 2.01625 18 3.25 18H12.25C13.4838 18 14.5 16.9837 14.5 15.75V3.75H15.25V2.25H10.75V1.5C10.75 1.1085 10.6112 0.705 10.3278 0.4215C10.045 0.1395 9.64225 0 9.25 0H6.25ZM6.25 1.5H9.25V2.25H6.25V1.5ZM2.5 3.75H13V15.75C13 16.1663 12.6663 16.5 12.25 16.5H3.25C2.83375 16.5 2.5 16.1663 2.5 15.75V3.75ZM4 6V14.25H5.5V6H4ZM7 6V14.25H8.5V6H7ZM10 6V14.25H11.5V6H10Z" fill="#2B2829"/>
        </svg>
    )
}
