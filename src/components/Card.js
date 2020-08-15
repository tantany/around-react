import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <li className="element">
      <div className="element__rectangle"></div>
      <div className="element__container">
        <div onClick={handleClick} className="element__image" style={{ backgroundImage: `url(${props.card.link})` }}></div>
        <button className="element__delete-button hover-button" aria-label="Delete"></button>
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__wrapper">
          <button className="element__heart hover-button" aria-label="Like"></button>
          <p className="element__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );

}

export default Card;
