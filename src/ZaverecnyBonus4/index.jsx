import React from 'react';
import { useState } from 'react';

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  return (
    <>
      <input
        onChange={(event) => setNumber1(Number(event.target.value))}
        type="number"
        defaultValue="0"
      />{' '}
      +{' '}
      <input
        onChange={(event) => setNumber2(Number(event.target.value))}
        type="number"
        defaultValue="0"
      />{' '}
      = <output>{number1 + number2}</output>
    </>
  );
};
