import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Set default time when availableTimes loads
  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  // Step 2: Client-side validation logic
  const isFormValid = () => {
    return (
      date !== '' &&
      time !== '' &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Reservation Submitted:', { date, time, guests, occasion });
      alert('Reservation successful!');
    }
  };

  // Get today's date in YYYY-MM-DD format for HTML5 min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    // Step 1: Semantic markup wrapper
    <section aria-label="Reservation Form Section">
      <form 
        style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto' }} 
        onSubmit={handleSubmit}
      >
        {/* Step 3: Explicit labeling using htmlFor and id */}
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          min={today}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        {/* Step 2: ARIA attribute aria-label="On Click" & disabled state */}
        <input 
          type="submit" 
          value="Make Your reservation" 
          aria-label="On Click"
          disabled={!isFormValid()}
          style={{
            backgroundColor: !isFormValid() ? '#cccccc' : '#f4ce14',
            cursor: !isFormValid() ? 'not-allowed' : 'pointer'
          }}
        />
      </form>
    </section>
  );
}

export default BookingForm;