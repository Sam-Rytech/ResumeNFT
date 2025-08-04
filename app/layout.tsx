import "../styles/globals.css"
import Navbar from "../components/NavBar"

export const metadata = {
  title: 'NFT Resume App',
  description: 'Mint your resume as an NFT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-4xl mx-auto mt-6">{children}</main>
      </body>
    </html>
  )
}
