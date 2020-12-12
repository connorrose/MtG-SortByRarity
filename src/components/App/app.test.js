/* eslint-disable react/jsx-filename-extension */
import { render } from '@testing-library/react';
import App from './app';

test('Load and render page', () => {
  const { getByText } = render(<App />);

  expect(getByText(/example/i)).toBeVisible();
});
