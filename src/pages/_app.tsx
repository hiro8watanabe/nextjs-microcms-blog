// import 'src/styles/Reset.css'
import React from "react";
import { AppProps } from "next/app";
import "src/styles/Globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;
