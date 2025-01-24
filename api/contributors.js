import config from '../config';
import { obtainInfraHeaders } from '../utils/infra';

class ContributorsAPI {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }

  async getContributor(contributorId, token) {
    const headers = this.axios.getCommonHeaders();
    const authHeaders = this.axios.getAuthorizationHeaders(token, false);
    const infraHeaders = await obtainInfraHeaders(
      config.infra,
      config.api.serverBaseURL
    );

    const { data } = await this.axios.get(`/${contributorId}`, {
      headers: {
        ...headers,
        ...authHeaders,
        ...infraHeaders,
      },
    });
    return data;
  }
}

export default ContributorsAPI;
