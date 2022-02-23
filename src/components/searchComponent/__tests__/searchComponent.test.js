import { render, screen, fireEvent } from '@testing-library/react';
import SearchComponent, { ETH_ZERO_ADDRESS } from '../index';

describe('Testing The search component', () => {
  test('It should render an input element', () => {
    render(<SearchComponent />);
    const inputElement = screen.getByPlaceholderText(`e.g ${ETH_ZERO_ADDRESS}`);
    expect(inputElement).toBeInTheDocument();
  });

  test('It should render a submit button', () => {
    render(<SearchComponent />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('It should be able to type in input', () => {
    render(<SearchComponent />);
    const SAMPLE_ADDRESS = '0x12345678';
    const inputElement = screen.getByPlaceholderText(`e.g ${ETH_ZERO_ADDRESS}`);
    fireEvent.change(inputElement, { target: { value: SAMPLE_ADDRESS } });
    expect(inputElement.value).toBe(SAMPLE_ADDRESS);
  });
});
