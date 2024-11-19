import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css"

export default function Footer(){
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.topFooter}>
                    <div className={styles.info}>
                        <Image width={100} height={100} layout="intrinsic" className={styles.logo} src="/assets/logo.png" alt="logo" />
                        <p className={styles.leftparagraph}>Didirikan pada tahun 2011 di Bandar Lampung, GLG Rent Car berkembang menjadi CV. GILANG PERKASA pada tahun 2016, menawarkan layanan rental mobil terpercaya dengan berbagai pilihan armada yang terawat, untuk memenuhi kebutuhan pelanggan seperti kunjungan kerja, bisnis, kedinasan, dan acara pribadi, dengan opsi layanan lepas kunci serta sopir berpengalaman.</p>
                        <div className={styles.socialIcon}>
                            <Link href="#"><Image width={30} height={10} layout="intrinsic" src="/assets/footerAsset/fb.svg" alt="Facebook" /></Link>
                            <Link href="#"><Image width={30} height={10} layout="intrinsic" src="/assets/footerAsset/ig.svg" alt="Instagram" /></Link>
                            <Link href="#"><Image width={30} height={10} layout="intrinsic" src="/assets/footerAsset/tt.svg" alt="TikTok" /></Link>
                        </div>
                    </div>
                    <div className={styles.addressInfo}>
                        <p className={styles.title}>Address</p>  
                        <div className={styles.addressDetail}>
                            <div className={styles.icon}>
                                <Image width={30} height={10} layout="intrinsic" className={styles.location} src="/assets/footerAsset/Location.svg" alt="location" />
                            </div>
                            <p className={styles.paragraph}>Jalan Tirtayasa, Gg Permata No 08, Sukabumi, Bandar Lampung</p>
                        </div>
                        <div className={styles.addressDetail}>
                            <div className={styles.icon}>
                                <Image width={30} height={10} layout="intrinsic" src="/assets/footerAsset/Call.svg" alt="call" />
                            </div>
                            <p className={styles.paragraph}>+628117212566</p>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <p className={styles.title}>Website Links</p>
                        <div className={styles.linkContainer}>
                            <Link href="#"><p className={styles.linkParagraph}>Home</p></Link>
                            <Link href="#"><p className={styles.linkParagraph}>Tentang Kami</p></Link>
                            <Link href="#"><p className={styles.linkParagraph}>Armada</p></Link>
                            <Link href="#"><p className={styles.linkParagraph}>Blog</p></Link>
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