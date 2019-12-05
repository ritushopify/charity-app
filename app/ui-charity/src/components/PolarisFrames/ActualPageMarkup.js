import React, { useCallback, useRef, useState } from "react";
import { Card, FormLayout, Layout, Page, TextField } from "@shopify/polaris";

export default function ActualPageMarkup() {
  return (
    <Page title="Account">
      <Layout>
        {skipToContentTarget}
        <Layout.AnnotatedSection
          title="Account details"
          description="Jaded Pixel will use this as your account information."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Full name"
                value={nameFieldValue}
                onChange={handleNameFieldChange}
              />
              <TextField
                type="email"
                label="Email"
                value={emailFieldValue}
                onChange={handleEmailFieldChange}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
}
