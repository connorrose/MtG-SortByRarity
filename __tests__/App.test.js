/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';

test('Load and render page', () => {
  const { getByText } = render(<App />);

  expect(getByText(/example/i)).toBeVisible();
});
