import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the public portfolio and filters activity', async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByRole('heading', { name: /survive contact with the business for money/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /after the clever demo/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /from soldering irons to ai agents/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /safe enough to respect, not trust/i })).toBeInTheDocument();
  expect(screen.getByText('Get humans to use it')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /public bits/i })).toBeInTheDocument();
  expect(screen.getByText(/lawyers made me sign an NDA/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /useful skepticism/i })).toBeInTheDocument();
  expect(screen.getByText('Legacy systems, modern automation')).toBeInTheDocument();
  expect(screen.getByText('Getting teams to actually use the thing')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /invite the opinions/i })).toBeInTheDocument();
  expect(screen.getByText('Founded and ran ISNOG #0')).toBeInTheDocument();
  expect(screen.getByText('Became Iceland’s youngest CCIE at the time')).toBeInTheDocument();
  expect(screen.queryByText('NSoT Cookbook')).not.toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: 'Writing' }));

  expect(screen.getByText('The EX4000: Entry Level Never Looked So Good!')).toBeInTheDocument();
  expect(screen.queryByText('Founded and ran ISNOG #0')).not.toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: 'Build' }));

  expect(screen.getByText('The IT infrastructure automation harness that joined the team')).toBeInTheDocument();
  expect(screen.getByText(/AI gets permission/i)).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: 'Milestone' }));

  expect(screen.getByText('Finished a BSc in computer science — at night')).toBeInTheDocument();
  expect(screen.queryByText('Founded and ran ISNOG #0')).not.toBeInTheDocument();
});
