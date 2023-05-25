import Navbar from "@component/components/navbar/Navbar";
import Head from "next/head";
import Login from "./login";
import Footer from "@component/components/footer/Footer";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Plug</title>
      </Head>
      
      <div>
        <Login />
      </div>
      
    </>
    
  )
}
