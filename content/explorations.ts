import type { Exploration } from './types';

/**
 * Smaller UI studies. Numbers (E01, E02…) come from the order here.
 * The first six appear on the landing page. Add an `image` once a shot is ready;
 * until then the card shows the name as a placeholder.
 */
export const explorations: Exploration[] = [
  { name: 'Numa', topic: 'Transaction clarity', industry: 'Fintech' },
  { name: 'Onda', topic: 'Merchant overview', industry: 'Fintech' },
  { name: 'Veyra', topic: 'Shift planner', industry: 'HR tech' },
  { name: 'Kairo', topic: 'Task management', industry: 'Productivity' },
  { name: 'Zuno', topic: 'Game discovery', industry: 'Gaming' },
  { name: 'Ralli', topic: 'Betting market flow', industry: 'iGaming' },
  { name: 'Sora', industry: 'E-commerce' },
  { name: 'Elara', industry: 'E-commerce' },
  { name: 'Avela', industry: 'Travel' },
  { name: 'Tella', industry: 'GovTech' },
];

export const explorationNumber = (exploration: Exploration) =>
  `E${String(explorations.indexOf(exploration) + 1).padStart(2, '0')}`;

export const LANDING_EXPLORATION_COUNT = 6;
