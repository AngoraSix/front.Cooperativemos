import { getFromEnvsOrElse } from "../utils/config";

class Infra {
  constructor(env) {
    this.googleCloudRunAuthEnabled = getFromEnvsOrElse(env, 'COOP_APP_INFRA_GOOGLE_CLOUDRUN_AUTH_ENABLED', null) === 'true';
  }
}

export default Infra;
