import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; 
import BookingPage from './BookingPage';

export function initializeTimes() {
  const today = new Date();
  if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
    const times = window.fetchAPI(today);
    if (times) return times;
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = new Date(action.payload);
      if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
        const times = window.fetchAPI(selectedDate);
        if (times) return times;
      }
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
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} 
        />
      </Routes>
    </main>
  );
}

export default Main;