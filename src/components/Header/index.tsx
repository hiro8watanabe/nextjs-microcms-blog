import React from "react";
import Link from "next/link";
import headerStyles from "src/components/Header/Header.module.css";
import Image from "next/image";

const h1Title: string = "PENGIN CODE";

export function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.inner}>
        <div className={headerStyles.logoWrapper}>
          <Image
            src="/images/pengin-icon.png"
            alt="PENGIN CODE LOGO"
            width={52}
            height={52}
            className={`${headerStyles.logo} `}
          />
          <h1 className={headerStyles.heading2Xl}>{h1Title}</h1>
        </div>
        <nav className={headerStyles.nav}>
          <ul className={headerStyles.lists}>
            <li className={headerStyles.list}>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li className={headerStyles.list}>
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li className={headerStyles.list}>
              <Link href="/blogs">
                <a>BLOG</a>
              </Link>
            </li>
            <li className={headerStyles.list}>
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
