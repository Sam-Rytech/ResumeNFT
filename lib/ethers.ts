import { ethers } from 'ethers'

declare global {
  interface Window {
    ethereum?: any
  }
}

/**
 * Returns a browser-compatible Ethers provider.
 * Throws an error if no wallet is detected.
 */
export const getProvider = (): ethers.BrowserProvider => {
  if (!window.ethereum) {
    throw new Error(
      'No wallet found. Please install MetaMask or another Web3 wallet.'
    )
  }

  return new ethers.BrowserProvider(window.ethereum)
}

/**
 * Requests account access and returns the signer (connected wallet).
 */
export const getSigner = async (): Promise<ethers.JsonRpcSigner> => {
  // Prompt MetaMask to connect (shows popup if not connected)
  await window.ethereum.request({ method: 'eth_requestAccounts' })

  const provider = getProvider()
  const signer = await provider.getSigner()

  return signer
}
