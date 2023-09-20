import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

test('Header renders with logo and navigation links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Check if the logo is rendered
  const logoImg = screen.getByTestId('logo-img-header');
  expect(logoImg).toBeInTheDocument();

  // Check if navigation links are rendered
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();

  const aproposLink = screen.getByText('A Propos');
  expect(aproposLink).toBeInTheDocument();

  const connectezLink = screen.getByText('Contactez Nous!');
  expect(connectezLink).toBeInTheDocument();

  // Check if the shopping cart icon is rendered
  const shoppingCartIcon = screen.getByTestId('shopping-cart-icon');
  expect(shoppingCartIcon).toBeInTheDocument();
});
