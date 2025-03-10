const LOGO_IMAGE_URI = '/logos/cooperativemos-square-500.png';
const LOGO_FULL = '/logos/cooperativemos.png';

class Site {
  constructor() {
    this.head = {
      title: 'Cooperativemos',
      description: '¡Potenciá tu cooperativa!',
      image: {
        logo: LOGO_IMAGE_URI,
        full: LOGO_FULL,
       },
    };
  }
}

export default Site;
