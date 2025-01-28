import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import A6App from '../components/App';
import reducers from '../store/reducers';
import '../styles/App.css';
import '../styles/Commons.css';
import '../styles/Landing.css';
import '../styles/Layouts.css';
import '../styles/Navbar.css';
import '../styles/globals.css';

const CooperativemosWebApp = ({ Component, pageProps, preloadedState }) => {
  const store = createStore(reducers, preloadedState);

  return (
    <>
      <ReduxProvider store={store}>
        <NextAuthProvider session={pageProps.session} refetchInterval={1 * 30}>
          <A6App>
            <Component {...pageProps} />
          </A6App>
        </NextAuthProvider>
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

CooperativemosWebApp.getInitialProps = async ({ }) => {

  const store = createStore(reducers);

  const preloadedState = store.getState();

  return {
    preloadedState,
  };
};

export default appWithTranslation(CooperativemosWebApp);
