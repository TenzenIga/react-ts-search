import React from 'react';


type TabButtonProps={
  activeTab:string
  name:string
  text:string
  onClick:(event: React.MouseEvent<HTMLButtonElement>)=>void
}

export default function TabButton(props:TabButtonProps) {
    const {activeTab, name, text, onClick} = props;

    let className = 'tab-btn';

    if (activeTab === name) {
      className += ' tab-btn--active';
    }
    return (
<button onClick={onClick} className={className}>{text}</button>
    )
}
