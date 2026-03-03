export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Oferta',
    href: '/oferta/',
    children: [
      {
        label: 'Grafit EDM',
        href: '/oferta/grafit-edm/',
        children: [
          { label: 'R8710', href: '/oferta/grafit-edm/r8710/' },
          { label: 'R8650', href: '/oferta/grafit-edm/r8650/' },
          { label: 'R8500', href: '/oferta/grafit-edm/r8500/' },
          { label: 'R8510', href: '/oferta/grafit-edm/r8510/' },
        ],
      },
      { label: 'Oprawki EROWA', href: '/oferta/erowa/' },
      {
        label: 'Materiały eksploatacyjne',
        href: '/oferta/materialy-eksploatacyjne/',
        children: [
          { label: 'Drut EDM', href: '/oferta/materialy-eksploatacyjne/drut/' },
          { label: 'Filtry', href: '/oferta/materialy-eksploatacyjne/filtry/' },
          { label: 'Elektrody', href: '/oferta/materialy-eksploatacyjne/elektrody/' },
          { label: 'Frezy', href: '/oferta/materialy-eksploatacyjne/frezy/' },
        ],
      },
    ],
  },
  {
    label: 'Usługi',
    href: '/uslugi/',
    children: [
      { label: 'Frezowanie grafitu CNC', href: '/uslugi/frezowanie-grafitu-cnc/' },
      { label: 'Frezowanie metalu CNC', href: '/uslugi/frezowanie-metalu-cnc/' },
      { label: 'Toczenie grafitu', href: '/uslugi/toczenie-grafitu/' },
      { label: 'Elektrody EDM CNC', href: '/uslugi/elektrody-edm-cnc/' },
    ],
  },
  { label: 'Baza wiedzy', href: '/baza-wiedzy/' },
  { label: 'O nas', href: '/o-nas/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const footerLinks = {
  company: [
    { label: 'O nas', href: '/o-nas/' },
    { label: 'Kontakt', href: '/kontakt/' },
    { label: 'Baza wiedzy', href: '/baza-wiedzy/' },
  ],
  products: [
    { label: 'Grafit EDM', href: '/oferta/grafit-edm/' },
    { label: 'Oprawki EROWA', href: '/oferta/erowa/' },
    { label: 'Materiały eksploatacyjne', href: '/oferta/materialy-eksploatacyjne/' },
  ],
  services: [
    { label: 'Frezowanie grafitu CNC', href: '/uslugi/frezowanie-grafitu-cnc/' },
    { label: 'Frezowanie metalu CNC', href: '/uslugi/frezowanie-metalu-cnc/' },
    { label: 'Toczenie grafitu', href: '/uslugi/toczenie-grafitu/' },
    { label: 'Elektrody EDM CNC', href: '/uslugi/elektrody-edm-cnc/' },
  ],
};
