
import React from 'react';
import { NavItem, StatItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Hub', path: '/academy' },
  { label: 'Logistics', path: '/logistics' },
  { label: 'Lifestyle', path: '/lifestyle' },
  { label: 'Reach Out', path: '/contact' },
  { label: 'Bookings', path: '/bookings' },
];

export const STATS: StatItem[] = [
  { label: 'Global Clients', value: '500+', description: 'Serving businesses worldwide' },
  { label: 'Market Reach', value: '45+', description: 'Active in 45 countries' },
  { label: 'Success Rate', value: '98%', description: 'Client satisfaction score' },
  { label: 'Experience', value: '15+', description: 'Years of industry excellence' },
];

export const COLORS = {
  primary: '#0f172a', // slate-900
  accent: '#fbbf24',  // amber-400
  secondary: '#1e293b' // slate-800
};
