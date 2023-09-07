import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Use BrowserRouter for testing
import App from './App';

test('renders App component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // You can add assertions here to test specific elements or behaviors.
  // For example, you can check if certain text is present on the page.
  const loginText = getByText(/Login/i);
  expect(loginText).toBeInTheDocument();

  // You can write more tests to cover different scenarios in your app.
});
