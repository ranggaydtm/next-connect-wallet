"use client";

import {
  TonConnectButton,
  useTonConnectUI,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";

export default function Home() {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const address = useTonAddress();

  const onCopy = () => {
    if (!wallet) return;
    navigator.clipboard.writeText(address);
  };

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <span className='font-bold text-2xl'>Ton Connect Wallet</span>

        {wallet ? (
          <div className='flex flex-col gap-4'>
            <span className='capitalize '>wallet address</span>
            <span>{wallet.account.address}</span>

            <button onClick={onCopy} className=' px-4 py-2'>
              copy
            </button>
          </div>
        ) : (
          <div className='flex flex-col gap-4 items-center justify-center'>
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
        )}
      </div>
    </div>
  );
}
