
export enum ServiceType {
  ACADEMY = 'Academy',
  LOGISTICS = 'Logistics',
  LIFESTYLE = 'Lifestyle'
}

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface BookingSlot {
  time: string;
  available: boolean;
}
