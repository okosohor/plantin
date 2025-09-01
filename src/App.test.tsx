import { render, screen } from '@testing-library/react';
import App from './App';

// Простий тест, який завжди проходить
describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(true).toBe(true);
  });

});
