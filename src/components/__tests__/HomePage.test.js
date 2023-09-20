import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

test('HomePage renders with correct content', () => {
  render(
    <MemoryRouter>
        <HomePage />
    </MemoryRouter>
  );

  // Check if the title "Products" is rendered
  const titleProducts = screen.getByTestId('title-products');
  expect(titleProducts).toBeInTheDocument();
  
  // Check if the search input and button are rendered
  const searchInput = screen.getByTestId('search-products');
  expect(searchInput).toBeInTheDocument();

  const searchButton = screen.getByTestId('input-search');
  expect(searchButton).toBeInTheDocument();

  // Check if the header and footer components are rendered
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
  
  // You can add more assertions as needed to test other parts of the component
});
