import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
        // Optionally add your settings here
        once: true, // Whether animation should happen only once
        // other settings
    });
}, []);
  return <Component {...pageProps} />;
}
