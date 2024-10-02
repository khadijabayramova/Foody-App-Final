import "../styles/globals.css";
import { GlobalProvider } from "../Context/globalcontext"; // Use named import for GlobalProvider

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
