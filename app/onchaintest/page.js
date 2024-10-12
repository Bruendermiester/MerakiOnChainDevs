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
      <div style={{ textAlign: 'center' }}>
        <iframe
          src="/unity.html"
          width="100%"
          height="600px"
          title="Unity Game"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}
