import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testing the Home page component', () => {
  test('It should render a heading', () => {
    render(<App />);
    const headingElement = screen.getByTestId('header');
    expect(headingElement).toBeInTheDocument();
  });

  test('It Should renders a subheading', () => {
    render(<App />);
    const subHeadingElement = screen.getByText(
      /Please input your ethereum public address, in order to ensure it is a valid ethereum public address./i
    );
    expect(subHeadingElement).toBeInTheDocument();
  });

  test('It should render a search component wrapper', () => {
    render(<App />);
    const headingElement = screen.getByTestId('searchwrapper');
    expect(headingElement).toBeInTheDocument();
  });
});
