import { ethers } from 'ethers'

declare global {
  interface Window {
    ethereum?: any
  }
}

export const getProvider = () => {
  if (!window.ethereum) throw new Error('No wallet found')
  return new ethers.BrowserProvider(window.ethereum)
}

export const getSigner = async () => {
  const provider = getProvider()
  return await provider.getSigner()
}
