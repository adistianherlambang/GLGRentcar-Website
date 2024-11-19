import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/nav.module.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {isMenuOpen && <div className={styles.blurBackground}></div>}

      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <div className={`${styles.logo} ${isMenuOpen ? styles.hideLogo : ""}`}>
            <Image src="/assets/logo.png" alt="logo" width={90} height={90} />
          </div>

          <div
            className={`${styles.navLink} ${styles.fullscreenMenu} ${
              isMenuOpen ? styles.showMenu : ""
            }`}
          >
            <Link href="/" className={`${styles.link} ${styles.linkTop}`} >
              Home
            </Link>
            <Link href="/tentangkami" className={styles.link}>
              Tentang Kami
            </Link>
            <Link href="/armada" className={styles.link}>
              Armada
            </Link>
            <Link href="/blog" className={`${styles.link} ${styles.linkBottom}`}>
              Blog
            </Link>
          </div>

          <div className={styles.hamburgerWrapper} onClick={toggleMenu}>
            <div
              className={`${styles.hamburger} ${
                isMenuOpen ? styles.active : ""
              }`}
            >
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
