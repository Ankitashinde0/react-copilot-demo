// write me test cases for the form component with all necessary imports
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form';
import '../setupJestMock';

describe('Form', () => {
  it('should render a form with a button', () => {
    render(<Form />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render a form with an input', () => {
    render(<Form />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should call the submit function when the button is clicked', () => {
    const submit = jest.fn();
    render(<Form submit={submit} />);
    fireEvent.click(screen.getByRole('button'));
    expect(submit).toHaveBeenCalled();
  });
});

// Path: src/__tests__/App.test.jsx

// Preset jest-expo not found error fix