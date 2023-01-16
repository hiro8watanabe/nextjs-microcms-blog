// import 'src/styles/Reset.css'
import React from "react";
import "src/styles/Globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;
