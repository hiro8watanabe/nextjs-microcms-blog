import Link from "next/link";
import styles from "../styles/Footer.module.css";

export function Footer() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles.lists}>
              <li className={styles.list}>
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/about">
                  <a>ABOUT</a>
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/blogs">
                  <a>BLOG</a>
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/contact">
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.logoWrap}>
            <h1 className={styles.title}>Hiro Code</h1>
            <p>
              業界3年。フロントエンドエンジニアになりたいコーダーの学習記録。お仕事依頼はお問い合わせよりお願いします。
            </p>
          </div>
        </div>
        <div className={styles.copy}>
          <small>©Copyright 2022 Hiro Code</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
