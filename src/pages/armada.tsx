import Footer from "@/components/Footer";
import Head from "next/head";
import styles from "@/styles/armada.module.css"
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/nav";

export default function tentangKami() {

    return(
        <>
        <Head>
            <title>Tentang Kami</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <Navbar />
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <p className={styles.headerTitle}>Armada</p>
                    <p className={styles.headerCategory}><a href="/" className={styles.headerButton}>GLG RentCar / </a>Armada</p>
                </div>
            </div>

            

            <div className={styles.footer}>
                <Footer />
            </div>
        </main>
        </>
    )

}