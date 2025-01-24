import axios from 'axios';
import config from '../config';

class ThirdPartiesAPI {
  constructor() {
    this.axios = axios.create({});
  }

  async verifyGoogleRecaptchaToken(grecaptchaToken) {
    const verificationURL = config.thirdParties.googleRecaptcha.verifyUrl

    const params = new URLSearchParams();
    params.append('secret', process.env.COOP_APP_THIRDPARTIES_GOOGLERECAPTCHA_SECRET);
    params.append('response', grecaptchaToken);

    const { data } = await this.axios.post(verificationURL, params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return data;
  }
}

export default ThirdPartiesAPI;
