'use client'
import { useEffect, useState } from 'react'

export default function WalletConnect({
  onConnected,
}: {
  onConnected: (address: string) => void
}) {
  const [address, setAddress] = useState('')

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Install MetaMask!')
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    setAddress(accounts[0])
    onConnected(accounts[0])
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAddress(accounts[0])
        onConnected(accounts[0])
      })
    }
  }, [])

  return (
    <div className="mb-4">
      {address ? (
        <p className="text-green-600">Connected: {address.slice(0, 8)}...</p>
      ) : (
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}
