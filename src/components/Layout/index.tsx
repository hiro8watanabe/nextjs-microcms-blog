import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "src/components/Layout/Layout.module.css";
import utilStyles from "src/styles/Utils.module.css";
import Image from "next/image";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

// const name: string = "PENGIN CODE";

type Props = {
  children: ReactNode;
  home?: boolean;
  about?: boolean;
  blogs?: boolean;
  category?: boolean;
};

// export const siteTitle = "Next.js Blog";

export function Layout({ children, home, blogs, category }: Props) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {/* <Head><Link rel="icon" href="/favicon.ico" /></Head> */}
        <div className={styles.header}>
          {home ? (
            <>
              <Image
                src="/images/pengin.png"
                alt="プロフィール画像"
                width={180}
                height={180}
                priority={true}
                placeholder="blur"
                blurDataURL={"/images/pengin.png"}
                className={`${utilStyles.borderCircle} ${styles.headerHomeImage} ${styles.headerHomeImageMove}`}
              />
            </>
          ) : (
            <>
              <Image
                src="/images/pengin.png"
                alt="プロフィール画像"
                width={140}
                height={140}
                priority={true}
                placeholder="blur"
                blurDataURL={"/images/pengin.png"}
                className={`${utilStyles.borderCircle} ${styles.headerImage} ${styles.headerHomeImageMove}`}
              />
              {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
            </>
          )}
        </div>

        <main>
          {children}
          {!home && (
            <div
              className={`${utilStyles.position} ${
                blogs
                  ? `${utilStyles.wideBackBtnInner}`
                  : category
                  ? `${utilStyles.wideBackBtnInner}`
                  : `${utilStyles.inner}`
              }`}
            >
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
