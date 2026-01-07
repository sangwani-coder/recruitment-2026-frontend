import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { server } from './mocks/server';
import { http, HttpResponse } from 'msw';

// Add a specific mock for the province-cities endpoint
server.use(
  http.get('*/api/v1/provinces/Lusaka/cities', () => {
    return HttpResponse.json([
      { name: 'Lusaka City', population: 2500000 },
      { name: 'Chilanga', population: 100000 }
    ]);
  })
);

describe('Province Navigation', () => {
  test('renders the Province page when navigating to /province/Lusaka', async () => {
    render(
      <MemoryRouter initialEntries={['/province/Lusaka']}>
        {/* We wrap the App or our specific Router config here */}
        <App /> 
      </MemoryRouter>
    );

    // 1. Check if the Heading for the specific province appears
    expect(screen.getByText(/Province: Lusaka/i)).toBeInTheDocument();

    // 2. Check if the cities from the mock are rendered
    await waitFor(() => {
      expect(screen.getByText('Lusaka City')).toBeInTheDocument();
      expect(screen.getByText('Chilanga')).toBeInTheDocument();
    });
  });

  test('shows a 404 or "Not Found" message for invalid provinces', () => {
    render(
      <MemoryRouter initialEntries={['/province/InvalidName']}>
        <App />
      </MemoryRouter>
    );
    
    // We expect the app to handle unknown provinces gracefully
    expect(screen.getByText(/Province not found/i)).toBeInTheDocument();
  });
});