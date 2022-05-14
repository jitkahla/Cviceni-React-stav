import React from 'react';
import { useState } from 'react';

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
  const [answer, setAnswer] = useState('možná');
  return (
    <>
      <h3>Prší v Brně: {answer}</h3>
      <button
        onClick={() => {
          if (answer === 'možná') {
            setAnswer('ano');
          } else if (answer === 'ano') {
            setAnswer('ne');
          } else if (answer === 'ne') {
            setAnswer('možná');
          }
        }}
      >
        změnit
      </button>
    </>
  );
};
