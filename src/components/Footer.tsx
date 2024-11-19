import React from "react";
import styles from "@/styles/Footer.module.css"

export default function Footer(){
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.topFooter}>
                    <div className={styles.info}>
                        <img className={styles.logo} src="/assets/logo.png" alt="logo" />
                        <p className={styles.leftparagraph}>Didirikan pada tahun 2011 di Bandar Lampung, GLG Rent Car berkembang menjadi CV. GILANG PERKASA pada tahun 2016, menawarkan layanan rental mobil terpercaya dengan berbagai pilihan armada yang terawat, untuk memenuhi kebutuhan pelanggan seperti kunjungan kerja, bisnis, kedinasan, dan acara pribadi, dengan opsi layanan lepas kunci serta sopir berpengalaman.</p>
                        <div className={styles.socialIcon}>
                            <a href="#"><img src="/assets/footerAsset/fb.svg" alt="Facebook" /></a>
                            <a href="#"><img src="/assets/footerAsset/ig.svg" alt="Instagram" /></a>
                            <a href="#"><img src="/assets/footerAsset/tt.svg" alt="TikTok" /></a>
                        </div>
                    </div>
                    <div className={styles.addressInfo}>
                        <p className={styles.title}>Address</p>  
                        <div className={styles.addressDetail}>
                            <div className={styles.icon}>
                                <img className={styles.location} src="/assets/footerAsset/Location.svg" alt="location" />
                            </div>
                            <p className={styles.paragraph}>Jalan Tirtayasa, Gg Permata No 08, Sukabumi, Bandar Lampung</p>
                        </div>
                        <div className={styles.addressDetail}>
                            <div className={styles.icon}>
                                <img src="/assets/footerAsset/Call.svg" alt="call" />
                            </div>
                            <p className={styles.paragraph}>+628117212566</p>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <p className={styles.title}>Website Links</p>
                        <div className={styles.linkContainer}>
                            <a href="#"><p className={styles.linkParagraph}>Home</p></a>
                            <a href="#"><p className={styles.linkParagraph}>Tentang Kami</p></a>
                            <a href="#"><p className={styles.linkParagraph}>Armada</p></a>
                            <a href="#"><p className={styles.linkParagraph}>Blog</p></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.paragraph}>Copyright © 2024 GLG Rentcar</p>
                </div>
            </div>
        </>
    )
}