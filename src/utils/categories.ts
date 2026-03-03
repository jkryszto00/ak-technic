export const categories = {
  'grafit-edm': 'Grafit EDM',
  'obrobka-cnc': 'Obróbka CNC',
  'materialy-eksploatacyjne': 'Materiały eksploatacyjne',
  'poradniki': 'Poradniki',
  'technologie': 'Technologie',
} as const;

export type CategoryId = keyof typeof categories;
