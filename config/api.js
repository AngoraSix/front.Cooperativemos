class Api {
  constructor(env) {
    this.serverBaseURL = env.COOP_APP_API_SERVER_BASE_URL || 'https://gerserver.com.ar/';
    this.browserBaseURL =
      env.COOP_PUBLIC_APP_API_BROWSER_BASE_URL || 'https://gerbrowser.com.ar/';
    this.servicesOverrideBaseURLs = {
      surveys: env.COOP_APP_API_SURVEYS_SERVER_BASE_URL,
    };
    this.servicesAPIGatewayPath = {
      surveys:
        env.COOP_APP_API_SURVEYS_SERVER_APIGATEWAY_PATH || '/surveys',
    };
  }
}

export default Api;
