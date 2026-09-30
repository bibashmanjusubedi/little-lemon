import React, { useReducer } from 'react';
import BookingPage from './BookingPage';

// Step 2: Function to set up initial state
export function initializeTimes() {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

// Step 2: Reducer function to handle state updates based on selected date
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Currently returning same default times regardless of date, as per requirements
      return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
    default:
      return state;
  }
}

function Main() {
  // Step 1 & 2: Lifted state up to Main and converted to useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;