import Footer from "@/components/Footer";
import Head from "next/head";
import styles from "@/styles/blog.module.css"
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
                    <p className={styles.headerTitle}>Blog</p>
                    <p className={styles.headerCategory}><a href="/" className={styles.headerButton}>GLG RentCar / </a>Blog</p>
                </div>
            </div>

            <div className={styles.content}>
                <Link href="/post/post1">
                    <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.topBlog}>
                        <div className={styles.topBlogLeft}>
                            <div className={styles.topBlogCopy}>
                                <div className={styles.topBlogCategory}><p>Pariwisata</p></div>
                                <p className={styles.blogTitle}>Lorem Ipsum Dolor</p>
                                <p className={styles.blogParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ....</p>
                                <div className={styles.blogTime}>
                                    <div className={styles.blogClock}>
                                        <img src="/assets/HomeAsset/blogTime.svg" alt="" />
                                        <p className={styles.time}>18.00 WIB</p>
                                    </div>
                                        <div className={styles.blogCalendar}>
                                        <img src="/assets/HomeAsset/blogCalendar.svg" alt="" />
                                        <p className={styles.time}>Desember 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.topBlogRight}></div>
                    </div>
                </Link>
                <div className={styles.blogContentWrapper}>
                    <p className={styles.blogContentTitle}>Recent Blog Post</p>
                    <div className={styles.blogContentContainer}>

                        <Link href="/post/post1">
                            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.blogContent}>
                                <div className={styles.blogContentImg}></div>
                                <div className={styles.blogContentCopy}>
                                    <p className={styles.blogParagraph}>Pariwisata</p>
                                    <p className={styles.blogTitle}>Lorem Ipsum Dolor</p>
                                    <p className={styles.blogParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ....</p>
                                </div>
                                <div className={styles.blogTime}>
                                    <div className={styles.blogClock}>
                                        <img src="/assets/HomeAsset/blogTime.svg" alt="" />
                                        <p className={styles.time}>18.00 WIB</p>
                                    </div>
                                        <div className={styles.blogCalendar}>
                                        <img src="/assets/HomeAsset/blogCalendar.svg" alt="" />
                                        <p className={styles.time}>Desember 2024</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
            

            <div className={styles.footer}>
                <Footer />
            </div>
        </main>
        </>
    )

}