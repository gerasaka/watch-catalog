import { fireEvent, render, screen } from '@testing-library/react';
import { redirect } from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';
import Button from './index';

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

describe('Button Component', () => {
  it('renders multiple buttons correctly', () => {
    render(<Button id={1} />);

    const buttons = screen.getByText('VIEW MORE');
    expect(buttons).toBeDefined();
  });

  it('calls redirect with the correct ID when clicked', () => {
    render(<Button id={1} />);

    const buttons = screen.getAllByText('VIEW MORE');

    fireEvent.click(buttons[0]);
    expect(redirect).toHaveBeenCalledWith('/details/1');
  });
});
