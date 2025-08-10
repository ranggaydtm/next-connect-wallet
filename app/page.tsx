"use client";

import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";

export default function Home() {
  const [tonConnectUI] = useTonConnectUI();
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <span className='font-bold text-2xl'>Ton Connect Wallet</span>

        <TonConnectButton />

        <div className='w-full flex flex-col gap-4 text-white'>
          <button
            onClick={() =>
              tonConnectUI.openSingleWalletModal("telegram-wallet")
            }
            className='bg-[#0098EA] px-4 py-2 rounded-full cursor-pointer font-semibold text-sm'
          >
            Connect Telegram Wallet
          </button>

          <button
            onClick={() => tonConnectUI.openSingleWalletModal("tonkeeper")}
            className='bg-[#0098EA] px-4 py-2 rounded-full cursor-pointer font-semibold text-sm'
          >
            Connect Ton Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
