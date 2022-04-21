import React from 'react';
import './CharacterTile.css';

export default function CharacterTile(c) {
  const character = c.data;
  return (
    <div className="char-container ">
      <div className="row">

        <div className="char-img-container col">
          <img className="char-img" src={character.img} alt={c.name} />
        </div>

        <div className="col char-details">
          <h1 className='char-name'>{character.name}</h1>
          <div className="azure-text">
          <h4>Nickname: {character.nickname}</h4>
          <hr/>
          <h5>Appearances : {character.category}</h5>
          <h5>Portrayed by : {character.portrayed}</h5>
          <h5>Status : {character.status}</h5>
          <h5>Main Occupation: {character.occupation[0]}</h5>
          </div>

        </div>

      </div>
    </div>
  )
}
