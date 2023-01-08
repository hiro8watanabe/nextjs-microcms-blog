import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "src/components/Layout/Layout.module.css";
import utilStyles from "src/styles/Utils.module.css";
import Image from "next/image";
import { Footer } from "src/components/Footer";

const name: string = "PENGIN CODE";

type Props = {
  children: ReactNode;
  home?: boolean;
  about?: boolean;
  blogs?: boolean;
};

// export const siteTitle = "Next.js Blog";

export function Layout({ children, home }: Props) {
  return (
    <>
      <div className={styles.container}>
        {/* <Head><Link rel="icon" href="/favicon.ico" /></Head> */}
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                src="/images/pengin.png"
                alt=""
                width={180}
                height={180}
                className={`${utilStyles.borderCircle} ${styles.headerHomeImage} ${styles.headerHomeImageMove}`}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Image
                src="/images/pengin.png"
                alt=""
                width={140}
                height={140}
                className={`${utilStyles.borderCircle} ${styles.headerImage} ${styles.headerHomeImageMove}`}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          )}
        </header>

        <main>
          {children}
          {!home && (
            <div className={`${utilStyles.position} ${utilStyles.inner}`}>
              <Link href="/">
                <a>◀ ホームへ戻る</a>
              </Link>
            </div>
          )}
        </main>
        {/* {!home && (
          <div className={`${utilStyles.position} ${utilStyles.inner}`}>
            <Link href="/">
              <a>◀ ホームへ戻る</a>
            </Link>
          </div>
        )} */}
      </div>
      <Footer />
    </>
  );
}
