import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Calculator({ operation }) {
  const query = useQuery();
  const x = parseFloat(query.get('x'));
  const y = parseFloat(query.get('y'));

  let result;
  if (isNaN(x) || isNaN(y)) {
    result = 'Błędne argumenty';
  } else {
    switch (operation) {
      case 'add':
        result = x + y;
        break;
      case 'sub':
        result = x - y;
        break;
      case 'mul':
        result = x * y;
        break;
      case 'div':
        result = y !== 0 ? x / y : 'Dzielenie przez zero';
        break;
      default:
        result = 'Nieznana operacja';
    }
  }

  return (
    <div>
      <h1>Wynik: {result}</h1>
    </div>
  );
}

export default Calculator;
