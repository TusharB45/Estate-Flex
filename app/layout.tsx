import { Poppins } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import './globals.css'
import getCurrentUser from './actions/getCurrentUser';

import RentModal from "./components/modals/RentModal";

import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import SearchModal from "./components/modals/SearchModal";
import BackgroundParticles from "./components/Canvas/Stars"

export const metadata = {
  title: 'Estateflex',
  description: 'A simple reservation website',
}

const font = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ['500'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${font.className} bg-cover bg-center bg-fixed bg-slate-100`} style={{ backgroundImage: 'url("/images/bb.gif")', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '20%' }}>
        <ClientOnly >
          <BackgroundParticles />
          <ToasterProvider />
          <SearchModal />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
