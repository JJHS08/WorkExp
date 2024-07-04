import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const linkElement = screen.getByText("Senior");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.tagName).toBe("H1");
});
