import Footer from "@/components/Footer";
import Head from "next/head";
import styles from "@/styles/blogPost.module.css"
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
            <div className={styles.content}>
                <div className={styles.header}></div>
                <div className={styles.copy}>
                    <div className={styles.blogCategory}><p>Pariwisata</p></div>
                    <div className={styles.title}>
                        <p className={styles.blogTitle}>Lorem Ipsum Dolor Sit Amet</p>
                        <div className={styles.blogTime}>
                            <div className={styles.blogClock}>
                                <img src="/assets/HomeAsset/blogTime.svg" alt="" />
                                <p className={styles.paragraph}>18.00 WIB</p>
                            </div>
                                <div className={styles.blogCalendar}>
                                <img src="/assets/HomeAsset/blogCalendar.svg" alt="" />
                                <p>Desember 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={styles.blogParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.
                        <br/>
                        <br/>
                        Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi.
                        Aenean magna nisl, ornare quis, scelerisque ut, dignissim et, libero. Vestibulum lacinia imperdiet nulla. Quisque tincidunt vestibulum quam, vitae tincidunt eros laoreet a. Integer euismod, augue vitae faucibus tristique, velit lorem laoreet lacus, et bibendum elit nunc a orci. Fusce aliquam dolor tellus, non bibendum mi interdum eget. Donec congue urna id mauris ornare, ut laoreet nisi vehicula. Ut a enim augue.
                        Sed vel nisi nec erat iaculis vehicula. Nam vulputate orci id tellus vulputate, quis fringilla metus luctus. Morbi egestas lacus sit amet sem interdum, nec elementum mauris tincidunt. Vivamus varius turpis at purus gravida convallis. Aliquam erat volutpat. Praesent pharetra risus non turpis fringilla, in rhoncus eros dictum. Nam sodales ultricies felis, a vestibulum lacus dapibus nec.
                    </p>
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </main>
        </>
    )

}