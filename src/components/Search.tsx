import React,{ useState, useContext} from 'react'

import { Store } from './context';


export function Search() {
  const {state, dispatch} = useContext(Store); 
  const [value, setValue] = useState('');
  const handleChange = (e:any)=>{
    setValue(e)
    fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
    {
      method: 'post',
      headers: {'Content-Type':'application/json', 'Authorization':'Token 9b3fc6c4fc150199abe0b7d7bb5708b9bba2d104'},
      body:JSON.stringify({
        'query':e
      })
    })
    .then(function(response) {
      if(response.ok){
        return response.json();
    }else{
        throw new Error("Post Failed")
      }
    }).then(function(responseBody){
        return dispatch({
          type:'FETCH_DATA',
          payload:responseBody.suggestions.slice(0, 5)
        })
    })
    .catch(function(error) {
        console.log("Request failed", error);
    })
  }
    return (
      
      <div className='search'>
      <p className='search__title'>Организация или ИП</p>
      <input type='text' value={value}  onChange={(e)=>handleChange(e.target.value)} className='search__input' placeholder='Введите название, ИНН или адрес организации' />
    </div>
    )
}

export default Search;
