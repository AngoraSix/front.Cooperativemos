class Infra {
  constructor() {
    this.googleCloudRunAuthEnabled =
      process.env.COOP_APP_INFRA_GOOGLE_CLOUDRUN_AUTH_ENABLED === 'true';
  }
}

export default Infra;
