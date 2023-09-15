import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../Footer';

test('Footer renders with correct content and links', () => {
  render(
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
  );

  // Check if the footer element is rendered
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();

  // Check if the "A propos" section is rendered
  const aproposSection = screen.getByTestId('p-apropos');
  expect(aproposSection).toBeInTheDocument();

  const aproposDescription = screen.getByTestId('p-desc');
  expect(aproposDescription).toBeInTheDocument();

  // Check if the "Contactez nous!" section is rendered
  const contactSection = screen.getByTestId('p-contact');
  expect(contactSection).toBeInTheDocument();

  const contactAddress = screen.getByTestId('p-adresse');
  expect(contactAddress).toBeInTheDocument();

  const contactEmail = screen.getByTestId('p-email');
  expect(contactEmail).toBeInTheDocument();

  const contactPhone = screen.getByTestId('p-tele');
  expect(contactPhone).toBeInTheDocument();

  // Check if the "Follow Us" section is rendered with social media links
  const followUsSection = screen.getByTestId('p-media');
  expect(followUsSection).toBeInTheDocument();

  const linkedinLink = screen.getByTestId('p-linkedin');
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/ata-testing/');

  const instagramLink = screen.getByTestId('p-instagram');
  expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/');

  const twitterLink = screen.getByTestId('p-twitter');
  expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com/');

  // Check if the copyright text is rendered
  const copyrightText = screen.getByTestId('p-copyright');
  expect(copyrightText).toBeInTheDocument();

  // Check if the copyright text contains the current year
  const currentYear = new Date().getFullYear();
  expect(copyrightText).toHaveTextContent(currentYear.toString());
});
