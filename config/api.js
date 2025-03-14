import { getFromEnvsOrElse } from "../utils/config";

class Api {
  constructor(env) {
    this.serverBaseURL = getFromEnvsOrElse(env, 'COOP_APP_API_SERVER_BASE_URL', 'https://gerserver.com.ar/');
    this.browserBaseURL =
      getFromEnvsOrElse(env, 'COOP_PUBLIC_APP_API_BROWSER_BASE_URL', 'https://gerbrowser.com.ar/');
    this.servicesOverrideBaseURLs = {
      surveys: getFromEnvsOrElse(env, 'COOP_APP_API_SURVEYS_SERVER_BASE_URL', null),
    };
    this.servicesAPIGatewayPath = {
      surveys:
        getFromEnvsOrElse(env, 'COOP_APP_API_SURVEYS_SERVER_APIGATEWAY_PATH', '/surveys'),
    };
  }
}

export default Api;
