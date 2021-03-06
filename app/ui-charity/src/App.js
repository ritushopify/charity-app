import React from "react";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import MainPage from "./components/MainPage";

export default function App() {
  const theme = {
    colors: {
      topBar: {
        background: "#357997"
      }
    },
    logo: {
      width: 40,
      topBarSource:
        "https://seeklogo.com/images/S/shopify-logo-1C711BCDE4-seeklogo.com.png",
      contextualSaveBarSource: "./assets/freeLogo.svg",
      accessibilityLabel: "Shopify Logo"
    }
  };
  return (
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
      {MainPage()}
    </AppProvider>
  );
}
