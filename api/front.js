class FrontAPI {
  constructor(axiosInstance, localhost = 'https://localhost/') {
    this.axios = axiosInstance;
    this.localhost = localhost;
  }

  async saveSurveyResponse(surveyResponseBody, surveyKey) {
    const { data } = await this.axios.post(`api/surveys/${surveyKey}/responses`, surveyResponseBody);
    return data;
  }

}

export default FrontAPI;
