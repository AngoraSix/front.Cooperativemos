class Api {
  constructor() {
    this.serverBaseURL = process.env.COOP_APP_API_SERVER_BASE_URL || 'https://gerserver.com.ar/';
    this.browserBaseURL =
      process.env.NEXT_PUBLIC_COOP_APP_API_BROWSER_BASE_URL || 'https://gerbrowser.com.ar/';
    this.servicesOverrideBaseURLs = {
      surveys: process.env.COOP_APP_API_SURVEYS_SERVER_BASE_URL,
    };
    this.servicesAPIGatewayPath = {
      surveys:
          process.env.COOP_APP_API_SURVEYS_SERVER_APIGATEWAY_PATH || '/surveys',
    };
    this.servicesAPIParams = {};
  }
}

export default Api;
