import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import React, {Suspense} from "react";
import Loading from "@/app/loading";
import Modal from "@/components/modal/modal";
import Head from "next/head";
import Login from "@/app/login/page";
import {Toaster} from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MOON WALKING DEV | BLOG',
  description: 'IT, PROGRAMMING, CODING BLOG',
  icons:{
    icon: '/rocket.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  `}>
        <div><Toaster/></div>
          <Navbar />
          <div className="relative top-44">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
            <Footer />
          </div>

      </body>
    </html>
  )
}
