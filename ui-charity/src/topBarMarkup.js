import React, { useCallback, useState } from "react";
import { TopBar } from "@shopify/polaris";

export default function TopBarMarkup() {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive(userMenuActive => !userMenuActive),
    []
  );
  const userMenuActions = [
    {
      items: [{ content: "Community forums" }]
    }
  ];
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Ritu"
      detail="Shopify, Inc."
      initials="RS"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  return <TopBar showNavigationToggle userMenu={userMenuMarkup} />;
}
