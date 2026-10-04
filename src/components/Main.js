import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; 
import BookingPage from './BookingPage';

// Step 2: Function to set up initial state using the global script API
export function initializeTimes() {
  const today = new Date();
  
  // Check if the script loaded successfully and call fetchAPI
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(today);
  }
  
  // Fallback default times if the script is still loading
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

// Step 2: Reducer function to handle state updates based on selected date
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Ensure we pass a proper Date object to fetchAPI
      const selectedDate = new Date(action.payload);
      
      if (typeof window.fetchAPI === 'function') {
        return window.fetchAPI(selectedDate);
      }
      return state;
      
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