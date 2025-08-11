"use client";

import {
  TonConnectButton,
  useTonConnectUI,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";
import { IconPlugConnectedX } from "@tabler/icons-react";
import toast from "react-hot-toast";

export default function Home() {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const address = useTonAddress();

  const onCopy = () => {
    if (!wallet) return;
    navigator.clipboard.writeText(address);
    toast.success("Wallet Address Copied");
  };

  const handleDisconnect = () => {
    tonConnectUI.disconnect();
    toast("Disconnected", {
      icon: <IconPlugConnectedX color='#d91111' />,
    });
  };

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <span className='font-bold text-2xl'>Ton Connect Wallet</span>

        {wallet ? (
          <div className='flex flex-col gap-4 items-center justify-center font-mono'>
            <div className='flex flex-col gap-2'>
              <span className='capitalize font-bold text-xl'>
                wallet address:
              </span>
              <span className='max-w-[180px] truncate'>
                {wallet?.account?.address}
              </span>
            </div>

            <button
              onClick={onCopy}
              className='border-4 border-blue-900 text-blue-900 capitalize text-sm font-sans font-bold rounded-full px-4 py-2 cursor-pointer'
            >
              copy wallet address
            </button>

            <div className='mt-2'>
              <button
                onClick={handleDisconnect}
                className='uppercase font-sans font-semibold text-[12px] text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-2xl cursor-pointer'
              >
                disconnect
              </button>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-4 items-center justify-center'>
            <TonConnectButton />

            <button
              onClick={() =>
                tonConnectUI.openSingleWalletModal("telegram-wallet")
              }
              className='bg-[#0098EA] text-white px-4 py-2 rounded-full cursor-pointer font-semibold text-sm'
            >
              Connect Telegram Wallet
            </button>

            <button
              onClick={() => tonConnectUI.openSingleWalletModal("tonkeeper")}
              className='bg-[#0098EA] text-white px-4 py-2 rounded-full cursor-pointer font-semibold text-sm'
            >
              Connect Ton Wallet
            </button>
            <div className='w-full flex flex-col gap-4 '></div>
          </div>
        )}
      </div>
    </div>
  );
}
