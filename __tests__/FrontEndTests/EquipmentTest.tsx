import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "@/pages";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      workouts: [
        { id: 1, name: 'Workout 1', equipment: 'dumbbell' },
        { id: 2, name: 'Workout 2', equipment: 'barbell' },
        { id: 3, name: 'Workout 3', equipment: 'none' },
      ]
    }),
  })
) as jest.Mock;

describe('Show first page render', () => {
  test('renders Home component with loading state', async () => {
    render(<Home />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    // Espera a que el estado de carga termine
    await waitFor(() => expect(screen.queryByTestId('spinner')).not.toBeInTheDocument());
  });

  test('filters workouts by equipment when input changes', async () => {
    render(<Home />);
    await waitFor(() => expect(screen.queryByTestId('spinner')).not.toBeInTheDocument());

    // Espera a que el input de filtro esté en el documento
    await waitFor(() => expect(screen.getByTestId('equipment-filter')).toBeInTheDocument());

    const input = screen.getByTestId('equipment-filter');
    fireEvent.change(input, { target: { value: 'dumbbell' } });

    await waitFor(() => {
      const workoutItems = screen.getAllByTestId('workout-item');
      expect(workoutItems).toHaveLength(1);
      expect(workoutItems[0]).toHaveTextContent('Workout 1');
    });
  });
});