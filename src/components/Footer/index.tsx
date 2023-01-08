import React from "react";
import Link from "next/link";
import styles from "src/components/Footer/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.section}>
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
            <h1 className={styles.title}>PENGIN CODE</h1>
            <p>
              業界3年に突入。自身を持ってフロントエンドエンジニアと名乗りたいコーダーの学習記録。
            </p>
          </div>
        </div>
        <div className={styles.copy}>
          <small lang="en">©Copyright 2022 PENGIN CODE</small>
        </div>
      </div>
    </footer>
  );
}

// export default Footer;
