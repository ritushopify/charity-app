import React from "react";
import ReactDOM from "react-dom";
import "@shopify/polaris/styles.css";
import { AppProvider } from "@shopify/polaris";

import App from "./App";
// import * as serviceWorker from "./serviceWorker";

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

function WrappedApp() {
  return (
    <AppProvider
      theme={theme}
      i18n={{
        Polaris: {
          Avatar: {
            label: "Avatar"
          },
          Frame: { skipToContent: "Skip to content" },
          TopBar: {
            toggleMenuLabel: "Toggle menu"
          }
        }
      }}
    >
      <App />
    </AppProvider>
  );
}

ReactDOM.render(<WrappedApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
