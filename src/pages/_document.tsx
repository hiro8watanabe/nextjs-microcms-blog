import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <link
          rel="canonical"
          href="https://nextjs-microcms-blog-olive.vercel.app/"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
