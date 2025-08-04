'use client';
import { useState } from 'react';
import WalletConnect from "../../components/WalletConnect"
import ResumeForm from '../../components/ResumeForm'
import ResumeDisplay from '../../components/ResumeDisplay'
import { generateMetadata } from '../../lib/generateMetadata'
import { getSigner } from "../../lib/ethers"
import ABI from "../../abi/ResumeNFT.json"
import { ethers } from 'ethers'

const CONTRACT_ADDRESS = '0xf3dB9cD3D0209e76fEeB0a96ABf018Ad38862Fc5'

export default function MintPage() {
  const [userAddress, setUserAddress] = useState('')
  const [metadata, setMetadata] = useState<any | null>(null)

  const handleSubmit = async (data: any) => {
    const metadataObj = generateMetadata(data)
    const metadataJson = JSON.stringify(metadataObj)
    const metadataURI = `data:application/json;base64,${btoa(metadataJson)}`

    const signer = await getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer)
    const tx = await contract.mintResume(metadataURI)
    await tx.wait()

    setMetadata(metadataObj)
  }

  return (
    <div className="p-8">
      <WalletConnect onConnected={setUserAddress} />
      <ResumeForm onSubmit={handleSubmit} />
      {metadata && (
        <div className="mt-8">
          <ResumeDisplay metadata={metadata} />
        </div>
      )}
    </div>
  )
}
