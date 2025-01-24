import config from '../config';
import BaseAPI from './BaseAPI';
import SurveysAPI from './surveys';
import ContributorsAPI from './contributors';
import FrontAPI from './front';
import ThirdPartiesAPI from './thirdparties';

class API {
  constructor() {
    this.applyEnvConfig();
  }

  get front() {
    return this.frontAPI;
  }

  get surveys() {
    return this.SurveysAPI;
  }

  get contributors() {
    return this.contributorsAPI;
  }

  get thirdParties() {
    return this.thirdPartiesAPI;
  }

  applyEnvConfig() {
    this.axios = new BaseAPI({
      serverBaseURL: config.api.serverBaseURL,
      browserBaseURL: config.api.browserBaseURL,
      infraConfigs: config.infra,
    });
    this.frontAPI = new FrontAPI(
      new BaseAPI({
        baseURL: '/',
      }),
      config.api.frontLocalhost
    );
    this.SurveysAPI = new SurveysAPI(_getServiceAPI('surveys', this.axios));
    this.contributorsAPI = new ContributorsAPI(
      _getServiceAPI('contributors', this.axios)
    );
    this.thirdPartiesAPI = new ThirdPartiesAPI();
  }
}

const _getServiceAPI = (service, axiosInstance) => {
  const serviceOverrideBaseURL = config.api.servicesOverrideBaseURLs[service],
    apiGatewayPath = config.api.servicesAPIGatewayPath[service];

  return serviceOverrideBaseURL
    ? new BaseAPI({
        ...axiosInstance.getDefaults(),
        baseURL: serviceOverrideBaseURL,
      })
    : apiGatewayPath
    ? new BaseAPI({
        ...axiosInstance.getDefaults(),
        baseURL: `${axiosInstance.getBaseURL()}${apiGatewayPath}`,
      })
    : axiosInstance;
};

const api = new API();

export default api;
