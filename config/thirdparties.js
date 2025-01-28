class ThirdParties {
  constructor() {
    this.googleAnalytics = {
      id: process.env.NEXT_PUBLIC_COOP_APP_THIRDPARTIES_GOOGLEANALYTICS_ID || 'googleAnalytics123',
    };
    this.googleTagManager = {
      id: process.env.NEXT_PUBLIC_COOP_APP_THIRDPARTIES_GOOGLETAGMANAGER_ID || 'googleTagManager123',
      adsId: process.env.NEXT_PUBLIC_COOP_APP_THIRDPARTIES_GOOGLETAGMANAGER_ADSID || 'googleTagManagerAds123',
    };
    this.googleRecaptcha = {
      key: process.env.NEXT_PUBLIC_COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_ID || 'recaptchaKey123',
      secret: process.env.COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_SECRET || 'recaptchaSecret123',
      verifyUrl: process.env.NEXT_PUBLIC_COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_VERIFYURL || 'https://www.google.com/recaptcha/api/siteverify',
      minScore: process.env.NEXT_PUBLIC_COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_MINSCORE || 0.5,
    }
  }
}

export default ThirdParties;
