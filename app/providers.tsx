"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl='https://drive.google.com/file/d/1SMl6ONELgi7axLAgB08doxtyqiTMkbiD/view?usp=drive_link'>
      {children}
    </TonConnectUIProvider>
  );
}
