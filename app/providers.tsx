"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // create manifest.json file into link
    <TonConnectUIProvider manifestUrl='https://drive.google.com/file/d/1gk4jJPxZElELSX1jqjf0lvTP80QnI0U5/view?usp=drive_link'>
      {children}
    </TonConnectUIProvider>
  );
}
