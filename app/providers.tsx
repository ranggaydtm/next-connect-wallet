"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export function Providers({ children }: { children: React.ReactNode }) {
  const appUrl = process.env
    ?.NEXT_PUBLIC_MINI_APP_URL as `${string}://${string}`;

  return (
    // create manifest.json file into link
    <TonConnectUIProvider
      manifestUrl={`${appUrl}/connect-wallet-manifest.json`}
    >
      {children}
    </TonConnectUIProvider>
  );
}
