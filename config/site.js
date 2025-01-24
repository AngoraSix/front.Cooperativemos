const LOGO_IMAGE_URI = '/logos/cooperativemos-square-500.png';
const LOGO_FULL_SVG = '/logos/cooperativemos.svg';
const LOGO_FULL_SMALL = '/logos/cooperativemos-small.png';

class Site {
  constructor() {
    this.head = {
      title: 'Cooperativemos',
      description: '¡Potenciá tu cooperativa!',
      image: {
        logo: LOGO_IMAGE_URI,
        full: LOGO_FULL_SVG,
        fullSmall: LOGO_FULL_SMALL,
       },
    };
  }
}

export default Site;
