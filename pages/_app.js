import "../styles/globals.css";
import ReduxProvider from "../store/provider";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
