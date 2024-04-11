'use client';
import React, { useState, useEffect } from 'react';
import './onchaintest.css';
import cardMapping from '../cardMapping.json';
import shipCards from '../shipCards.json';
import cardList from '../cardList.json';

export default function OnChainTest() {
  const [title] = useState('On Chain Test Page');
  const [attribute, setAttribute] = useState('Damage');
  const [ship, setShip] = useState('Galleon');
  const [level, setLevel] = useState(30);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    // Filter the mapping first by level and attribute
    const availableCardNames = cardMapping['cards']
      .filter(mapping => mapping.Level <= level && mapping[attribute])
      .map(mapping => mapping[attribute]);

    // Include default ship cards
    const defaultShipCardsNames = shipCards[ship] || [];

    // Combine default ship cards with those filtered by attribute and level
    const combinedCardNames = [...new Set([...availableCardNames, ...defaultShipCardsNames])];

    // Filter the initial cards by whether their names appear in the combined names
    const filtered = cardList.filter(card => combinedCardNames.includes(card.name));

    setFilteredCards(filtered);
  }, [attribute, ship, level]);

  return (
    <div className='title'>
      <div>
        <select value={attribute} onChange={(e) => setAttribute(e.target.value)}>
          <option value="Damage">Damage</option>
          <option value="Accuracy">Accuracy</option>
          <option value="Speed">Speed</option>
          <option value="Health">Health</option>
          <option value="Evasion">Evasion</option>
        </select>
        <select value={ship} onChange={(e) => setShip(e.target.value)}>
          <option value="Galleon">Galleon</option>
          <option value="Frigate">Frigate</option>
          <option value="Sloop">Sloop</option>
        </select>
        <input type="number" value={level} min="1" max="30" onChange={(e) => setLevel(e.target.value)} />
      </div>
      <div className="cards-container">
        {filteredCards.map(card => (
          <div key={card.name} className="card">
            {card.image ? <img src={card.image} alt={card.name} /> : <div className='fallback'>{card.name}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
