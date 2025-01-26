import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ workouts: [] }),
  })
) as jest.Mock;

describe('Show first page render', () => {
  it('renders Home component with loading state', () => {
    render(<Home />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});