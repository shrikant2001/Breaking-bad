import React from 'react';
import { useState} from 'react';
import './Search.css';
import { useSelector } from 'react-redux';
import CharacterTile from '../CharacterTile/CharacterTile';

const Search = () => {
    
    const List = useSelector((state) => state.data.characters);
    const [query, setquery] = useState('');
    
    const handleChange = (e) => {
        setquery(e.target.value);
    }

    let {isLoggedIn} = true;

    const showList = () => {
      if (query === '') {
        return (
            <div className="list">
                {List.map((c) => {
                    return(
                    <CharacterTile data={c}/>
                    )
                })}
            </div>
        )
      } else {
        let newList = List.filter(char => char.name.toLowerCase().includes(query)  )
        return (
            <div className="list">
                {newList.map((c) => {
                    return(
                    <CharacterTile data={c}/>
                    )
                })}
            </div>
        )

      }
    }


    return (
        <div className="search-body">
            <div className="search-title display-6">
                SEARCH CHARACTERS
            </div>
            <div className="search-container">
                <input id='search-input' type="text" placeholder='Eg: pinkman' onChange={handleChange} />
            </div>

            
            <div className="list">
            {showList()}
            </div>

        </div>
    );
}

export default Search;
