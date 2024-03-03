"use client"
import { usePolkadot } from "@/src/context"
import { truncateWalletAddress } from "@/src/utils"
import Image from "next/image"
import React from "react"
import {
  FaDiscord,
  FaGithub,
  FaSpinner,
  FaTelegram,
  FaTwitter,
  FaWallet,
  FaYoutube,
} from "react-icons/fa"
const Navbar = () => {
  const { isInitialized, handleConnect, selectedAccount } = usePolkadot()

  return (
    <div className="container py-4">
      <div className="navbar bg-transparent justify-between">
        <div className="flex gap-x-3">
          <a href="/" className="btn btn-ghost text-xl">
            Module.Marketplace
          </a>
          <a href="https://discord.gg/communeai" target="_blank">
            <FaDiscord size={30} />
          </a>

          <a href="https://twitter.com/communeaidotorg" target="_blank">
            <FaTwitter size={30} />
          </a>

          <a href="https://www.youtube.com/@omnipotentlabs" target="_blank">
            <FaYoutube size={30} />
          </a>

          <a href="https://t.me/communecommunity" target="_blank">
            <FaTelegram size={30} />
          </a>
        </div>
        <div className="flex gap-x-3">
          <a href="https://github.com/luxejs/comhub-app" target="_blank">
            <FaGithub size={30} />
          </a>
          <input
            type="text"
            placeholder="Search Modules"
            className="input input-bordered min-w-80"
          />

          {!isInitialized && <FaSpinner className="spinner" />}
          {isInitialized && (
            <>
              {selectedAccount ? (
                <div className="relative flex items-center rounded-full shadow py-2">
                  <button className="flex items-center cursor-pointer">
                    <FaWallet size={24} className="text-purple" />
                    <span className="ml-2 font-mono">
                      {truncateWalletAddress(selectedAccount.address)}
                    </span>
                  </button>
                </div>
              ) : (
                <button disabled={!isInitialized}>
                  <Image
                    width={35}
                    height={35}
                    onClick={handleConnect}
                    className="cursor-pointer"
                    alt="Tailwind CSS Navbar component"
                    src="https://avatars.githubusercontent.com/u/33775474?s=200&v=4"
                  />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
