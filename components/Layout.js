import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Hiro Code";
export const siteTitle = "Next.js Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* <Head><Link rel="icon" href="/favicon.ico" /></Head> */}
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/sns_icon_min.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/sns_icon_min.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>◀ ホームへ戻る</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
