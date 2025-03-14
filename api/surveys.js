import config from '../config';
import { obtainInfraHeaders } from '../utils/infra';

class SurveysAPI {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }

  async saveSurveyResponse(surveyResponse, surveyKey) {
    const headers = this.axios.getCommonHeaders();
    const infraHeaders = await obtainInfraHeaders(
      config.infra,
      this.axios.getBaseURL()
    );

    const { data: savedSurvey } = await this.axios.post(
      `/${surveyKey}/responses`,
      surveyResponse,
      {
        headers: {
          ...headers,
          ...infraHeaders,
        },
      }
    );
    return savedSurvey;
  }
}

export default SurveysAPI;
