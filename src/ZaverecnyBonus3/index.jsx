import React from 'react';
import { useCasVSekundach } from './hodiny';

// Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas ve formátu 7:49:05.

// Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je 0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach();
  let cas = '';
  if (casVSekundach < 60) {
    cas = `0:00:${casVSekundach.toString()}`;
  } else if (casVSekundach === 60) {
    cas = `0:01:00`;
  } else if (casVSekundach < 60 && casVSekundach < 3600) {
    cas = `0:${(casVSekundach / 60).toString().padStart(2, '0')}:${(
      casVSekundach % 60
    ).toString()}`;
  } else if (casVSekundach === 3600) {
    cas = `01:00:00`;
  } else if (casVSekundach > 3600) {
    cas = `${Math.floor(casVSekundach / 3600)
      .toString()
      .padStart(2, '0')}:${Math.floor((casVSekundach % 3600) / 60)
      .toString()
      .padStart(2, '0')}:${((casVSekundach % 3600) % 60)
      .toString()
      .padStart(2, '0')}`;
  }

  return (
    <>
      Čas právě teď: <b>{cas}</b>
    </>
  );
};
