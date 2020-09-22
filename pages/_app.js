import "../styles/index.css";
import { graphqlEndpoint } from "utils/config";
import { NhostApolloProvider } from "react-nhost";

function MyApp({ Component, pageProps }) {
  return (
    <NhostApolloProvider gqlEndpoint={graphqlEndpoint}>
      <Component {...pageProps} />
    </NhostApolloProvider>
  );
}

export default MyApp;
