import Head from "next/head";
import "../styles/index.css";
import { graphqlEndpoint } from "utils/config";
import { NhostApolloProvider } from "react-nhost";

function MyApp({ Component, pageProps }) {
  return (
    <NhostApolloProvider gqlEndpoint={graphqlEndpoint}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </NhostApolloProvider>
  );
}

export default MyApp;
