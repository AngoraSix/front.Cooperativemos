class Api {
  constructor(env) {
    this.serverBaseURL = env.API_SERVER_BASE_URL || 'https://gerserver.com.ar/';
    this.browserBaseURL =
      env.API_BROWSER_BASE_URL || 'https://gerbrowser.com.ar/';
    this.servicesOverrideBaseURLs = {
      surveys: env.API_SURVEYS_SERVER_BASE_URL,
    };
    this.servicesAPIGatewayPath = {
      surveys:
          env.API_SURVEYS_SERVER_APIGATEWAY_PATH || '/surveys',
    };
    this.servicesAPIParams = {};
    this.mediaOverrideBaseURL = env.AN_FRONT_PUBLIC_MEDIA_SERVER_BASE_URL;
    this.frontLocalhost = env.API_EVENTSOURCE_LOCALHOST || 'https://localhost/';
  }
}

export default Api;
