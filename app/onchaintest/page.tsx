'use client';
import React, {useEffect, useState } from 'react';
import './onchaintest.css'

export default function OnChainTest() {

  const [title, setTitle] = useState('On Chain Test Page ');

  useEffect(() => {

  }, []);

  return (
    <div className='title'>{title}</div>
  );
}