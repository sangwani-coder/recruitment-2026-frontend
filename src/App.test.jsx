import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('searches and displays city results', async () => {
  const user = userEvent.setup();
  render(<App />);

  //Check if header exists
  expect(screen.getByText(/Zambia Geo Explorer/i)).toBeInTheDocument();

  // Type "Kitwe" into search
  const input = screen.getByPlaceholderText(/Search for a city/i);
  await user.type(input, 'Kitwe');

  // Click search button
  const button = screen.getByRole('button', { name: /search/i });
  await user.click(button);

  // Verify result appears
  await waitFor(() => {
    expect(screen.getByText('Kitwe')).toBeInTheDocument();
    expect(screen.getByText(/Population: 522,000/i)).toBeInTheDocument();
    expect(screen.getByText(/Province: Copperbelt/i)).toBeInTheDocument();
    expect(screen.getByText(/Provincial Capital: No/i)).toBeInTheDocument();
  });
});

test('shows loading state while fetching', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Search for a city/i);
  const button = screen.getByRole('button', { name: /search/i });

  fireEvent.change(input, { target: { value: 'Kitwe' } });
  fireEvent.click(button);

  expect(screen.getByText(/Fetching Zambian data/i)).toBeInTheDocument();
});