import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';

// Step 1: Test static text rendering in the BookingForm component
test('Renders the BookingForm heading or labels', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
  );

  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});

// Step 2: Test initializeTimes and updateTimes reducer functions
describe('Main component reducer functions', () => {
  test('initializeTimes returns the expected array of available times', () => {
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  test('updateTimes returns the available times state', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2026-10-01' };
    const expectedOutput = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];

    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedOutput);
  });
});