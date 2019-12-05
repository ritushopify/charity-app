import React from "react";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import AppRoutes from "./Routes/AppRoutes";

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
      accessibilityLabel: "Earth Logo"
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
      <AppRoutes />
    </AppProvider>
  );
}
