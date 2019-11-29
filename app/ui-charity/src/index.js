import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "@shopify/polaris/styles.css";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const theme = {
  colors: {
    topBar: {
      background: "#357997"
    }
  },
  logo: {
    width: 124,
    topBarSource: "shopify_logo_darkbg.svg",
    accessibilityLabel: "Shopify"
  }
};

const link = createHttpLink({
  uri: "https://charity-app.myshopify.io/graphql"
});

function WrappedApp() {
  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
  });

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AppProvider
          theme={theme}
          i18n={{
            enTranslations,
            Polaris: {
              Avatar: { label: "Avatar" },
              Frame: { skipToContent: "Skip to content" },
              TopBar: { toggleMenuLabel: "Toggle menu" }
            }
          }}
        >
          <App />
        </AppProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
