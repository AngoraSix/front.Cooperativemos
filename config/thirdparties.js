class ThirdParties {
  constructor(env) {
    this.googleAnalytics = {
      id: env.COOP_APP_THIRDPARTIES_GOOGLEANALYTICS_ID || 'googleAnalytics123',
    };
    this.googleTagManager = {
      id: env.COOP_APP_THIRDPARTIES_GOOGLETAGMANAGER_ID || 'googleTagManager123',
      adsId: env.COOP_APP_THIRDPARTIES_GOOGLETAGMANAGER_ADSID || 'googleTagManagerAds123',
    };
    this.googleRecaptcha = {
      key: env.COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_ID || 'recaptchaKey123',
      // secret: env.COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_SECRET || 'recaptchaSecret123',
      verifyUrl: env.COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_VERIFYURL || 'https://www.google.com/recaptcha/api/siteverify',
      minScore: env.COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_MINSCORE || 0.5,
    }
  }
}

export default ThirdParties;
