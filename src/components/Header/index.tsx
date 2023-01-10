import React from "react";
import Link from "next/link";
import headerStyles from "src/components/Header/Header.module.css";
import { Logo } from "src/components/Logo";

export function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.inner}>
        <Logo />
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
