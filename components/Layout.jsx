// import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/Utils.module.css";
import Image from "next/image";
import Footer from "./Footer";

const name = "Hiro Code";
export const siteTitle = "Next.js Blog";

function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        {/* <Head><Link rel="icon" href="/favicon.ico" /></Head> */}
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                src="/images/sns_icon_min.jpg"
                alt=""
                width={180}
                height={180}
                className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Image
                src="/images/sns_icon_min.jpg"
                alt=""
                width={140}
                height={140}
                className={`${utilStyles.borderCircle} ${styles.headerImage}`}
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

export default Layout;
