import Api from './api';
import Infra from './infra';
import Site from './site';
import ThirdParties from './thirdparties';

class A6Config {
  constructor() {
    this.applyEnvConfig();
  }

  get site() {
    return this.siteConfig;
  }

  get api() {
    return this.apiConfig;
  }

  get thirdParties() {
    return this.thirdPartiesConfig;
  }

  get infra() {
    return this.infraConfig;
  }

  applyEnvConfig() {
    this.buildNo = process.env.BUILD || 'dev';
    this.siteConfig = new Site();
    this.apiConfig = new Api();
    this.thirdPartiesConfig = new ThirdParties();
    this.infraConfig = new Infra();
  }
}

const config = new A6Config();

export default config;
