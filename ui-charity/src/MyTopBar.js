import React, { Component, useCallback, useState } from "react";
import { TopBar } from "@shopify/polaris";

class MyTopBar extends Component {
  render() {
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
}

export default MyTopBar;
