import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';

// Mock window.fetchAPI so Jest recognizes the external script function during testing
beforeAll(() => {
  window.fetchAPI = jest.fn((date) => {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
  });
});

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

// Step 1 (New): Test HTML5 validation attributes on form fields
test('HTML5 validation attributes are correctly applied to form inputs', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  const guestInput = screen.getByLabelText(/number of guests/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);

  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('min');

  expect(guestInput).toHaveAttribute('required');
  expect(guestInput).toHaveAttribute('min', '1');
  expect(guestInput).toHaveAttribute('max', '10');

  expect(timeSelect).toHaveAttribute('required');
  expect(occasionSelect).toHaveAttribute('required');
});

// Step 2 (New): Test JavaScript/React validation states (valid and invalid states)
test('Submit button is disabled when form is invalid and enabled when valid', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
  );

  // Target the button using its aria-label name 'Make your reservation on click'
  const submitButton = screen.getByRole('button', { name: /make your reservation on click/i });

  // 1. Invalid state (date field starts empty)
  expect(submitButton).toBeDisabled();

  // 2. Valid state (simulate selecting a valid future date)
  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2026-10-15' } });

  // Submit button should now become enabled
  expect(submitButton).toBeEnabled();
});

// Step 2 & 3: Test initializeTimes and updateTimes reducer functions
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