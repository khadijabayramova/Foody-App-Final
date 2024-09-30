import '../styles/globals.css';
import { GlobalProvider } from '../globalcontext/globalcontext';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
