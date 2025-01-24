import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import api from '../api';
import A6App from '../components/App';
import config from '../config';
import reducers from '../store/reducers';
import '../styles/App.css';
import '../styles/Commons.css';
import '../styles/Landing.css';
import '../styles/Layouts.css';
import '../styles/Navbar.css';
import '../styles/globals.css';
import { getEnv } from '../utils/env';
global.EventSource = require('eventsource');

const CooperativemosWebApp = ({ Component, pageProps, preloadedState, env }) => {
  const store = createStore(reducers, preloadedState);

  config.applyEnvConfig(env);
  api.applyEnvConfig(env);

  return (
    <>
      <ReduxProvider store={store}>
        <NextAuthProvider session={pageProps.session} refetchInterval={1 * 30}>
          <A6App>
            <Component {...pageProps} />
          </A6App>
        </NextAuthProvider>
      </ReduxProvider>
      {/* Google tag */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${config.thirdParties.googleAnalytics.id}`}></Script>
      <Script id="ga-script">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', '${config.thirdParties.googleAnalytics.id}');`}
      </Script>
      {/* Google reCaptcha */}
      <Script async defer src={`https://www.google.com/recaptcha/api.js?render=${config.thirdParties.googleRecaptcha.key}`}></Script>
      {/* <Script async defer src={`https://www.google.com/recaptcha/api.js`}></Script> */}
    </>
  );
};

CooperativemosWebApp.defaultProps = {
  pageProps: {},
  preloadedState: {},
  env: {},
};

CooperativemosWebApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
  preloadedState: PropTypes.object,
  env: PropTypes.object,
};

CooperativemosWebApp.getInitialProps = async ({ ctx }) => {
  // const nextProps = App.getInitialProps(ctx);
  const env = getEnv();

  config.applyEnvConfig(env);
  api.applyEnvConfig(env);

  const store = createStore(reducers);

  const preloadedState = store.getState();

  return {
    // ...nextProps,
    preloadedState,
    env,
  };
};

export default appWithTranslation(CooperativemosWebApp);
