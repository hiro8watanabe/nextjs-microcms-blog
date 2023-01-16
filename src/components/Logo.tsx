import React from "react";
import Image from "next/image";
import headerStyles from "src/components/Header/Header.module.css";
import Link from "next/link";

const h1Title: string = "PENGIN CODE";

export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <div className={headerStyles.logoWrapper}>
          <Image
            src="/images/pengin-icon.png"
            alt="PENGIN CODE LOGO"
            width={52}
            height={52}
            placeholder="blur"
            blurDataURL={"/images/pengin-icon.png"}
            className={`${headerStyles.logo} `}
          />
          <h1 className={headerStyles.heading2Xl}>{h1Title}</h1>
        </div>
      </a>
    </Link>
  );
};
