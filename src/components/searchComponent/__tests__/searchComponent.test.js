import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchComponent from '../index';
import constants from '../constants';

import store from '@/redux/store';

describe('Testing The search component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchComponent />
      </Provider>
    );
  });

  test('It should render an input element', () => {
    const inputElement = screen.getByPlaceholderText(`e.g ${constants.ETH_ZERO_ADDRESS}`);
    expect(inputElement).toBeInTheDocument();
  });

  test('It should render a submit button', () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('It should be able to type in input', () => {
    const SAMPLE_ADDRESS = '0x12345678';
    const inputElement = screen.getByPlaceholderText(`e.g ${constants.ETH_ZERO_ADDRESS}`);
    fireEvent.change(inputElement, { target: { value: SAMPLE_ADDRESS } });
    expect(inputElement.value).toBe(SAMPLE_ADDRESS);
  });
});
