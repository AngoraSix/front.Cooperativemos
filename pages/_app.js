import { appWithTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import api from '../api';
import A6App from '../components/App';
import config from '../config';
import reducers from '../store/reducers';
import '../styles/AboutUs.css';
import '../styles/App.css';
import '../styles/Commons.css';
import '../styles/Footer.css';
import '../styles/Landing.css';
import '../styles/Layouts.css';
import '../styles/Navbar.css';
import '../styles/Pricing.css';
import '../styles/StartNow.css';
import '../styles/StartNowCompleted.css';
import '../styles/globals.css';
import { getPublicEnv, removeSecrets } from '../utils/env';

const CooperativemosWebApp = ({ Component, pageProps, preloadedState, env }) => {
  const store = createStore(reducers, preloadedState);

  config.applyEnvConfig(env);
  api.applyEnvConfig(env);

  return (
    <>
      <ReduxProvider store={store}>
        <A6App>
          <Component {...pageProps} />
        </A6App>
      </ReduxProvider>
    </>
  );
};

CooperativemosWebApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
  preloadedState: PropTypes.object,
  env: PropTypes.object,
};

CooperativemosWebApp.getInitialProps = async ({ ctx }) => {
  // const nextProps = App.getInitialProps(ctx);
  const env = getPublicEnv();

  config.applyEnvConfig(env);
  api.applyEnvConfig(env);

  const store = createStore(reducers);

  const preloadedState = store.getState();

  return {
    preloadedState,
    env: removeSecrets(env),
  };
};

export default appWithTranslation(CooperativemosWebApp);
