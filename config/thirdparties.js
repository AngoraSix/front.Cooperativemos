import { getFromEnvsOrElse } from "../utils/config";

class ThirdParties {
  constructor(env) {
    this.googleAnalytics = {
      id: getFromEnvsOrElse(env, 'COOP_PUBLIC_APP_THIRDPARTIES_GOOGLEANALYTICS_ID', 'googleAnalytics123'),
    };
    this.googleAds = {
      id: getFromEnvsOrElse(env, 'COOP_APP_THIRDPARTIES_GOOGLETAGMANAGER_ADSID', 'googleAds123'),
    };
    this.googleRecaptcha = {
      key: getFromEnvsOrElse(env, 'COOP_PUBLIC_APP_THIRDPARTIES_GOOGLERECAPTCHA_ID', 'recaptchaKey123'),
      // secret: env.COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_SECRET || 'recaptchaSecret123',
      verifyUrl: getFromEnvsOrElse(env, 'COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_VERIFYURL', 'https://www.google.com/recaptcha/api/siteverify'),
      minScore: getFromEnvsOrElse(env, 'COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_MINSCORE', 0.5),
    }
  }
}

export default ThirdParties;
