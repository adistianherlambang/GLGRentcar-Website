import Footer from "@/components/Footer";
import Head from "next/head";
import styles from "@/styles/tentangKami.module.css"
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
                    <p className={styles.headerTitle}>Tentang Kami</p>
                    <p className={styles.headerCategory}><a href="/" className={styles.headerButton}>GLG RentCar / </a>Tentang Kami</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.tentangKami}>
                <p className={styles.tentangKamiCategory}>TENTANG KAMI</p>
                <p className={styles.tentangKamiTitle}>GLG RentCar</p>
                <p className={styles.tentangKamiParagraph}>Didirikan pada tahun 2011 di Bandar Lampung, GLG Rent Car Lampung telah berkembang pesat sebagai penyedia layanan persewaan mobil terpercaya. Melihat potensi besar dalam bisnis rental kendaraan dan berkomitmen pada profesionalitas, pada Oktober 2016, perusahaan ini memperluas cakupan usahanya dan secara resmi melegalitaskan diri sebagai CV. Gilang Perkasa melalui Akte Notaris No.28 oleh Notaris Chintia Nandy Yunike, S.H., M.Kn. GLG Rental Mobil Lampung menyediakan berbagai pilihan unit mobil untuk kebutuhan Kunjungan Kerja, Bisnis, Kedinasan, BUMN/D, Instansi, Kementerian, VIP/VVIP, Wedding Car, hingga penggunaan pribadi. Layanan ini menawarkan opsi Lepas Kunci untuk kenyamanan dan rasa aman pelanggan, dengan kondisi mobil yang selalu terawat dan bersih. Selain itu, tersedia layanan Plus Driver dengan pengemudi berpengalaman, sopan, dan rapi, memberikan pengalaman berkendara yang aman dan nyaman.</p>
            </div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="200" className={styles.visiMisiContainer}>
                <img src="/assets/tentangKami/line.svg" alt="" className={styles.lineTop} />
                <div className={styles.visiMisiContent}>
                    <div className={styles.visi}>
                        <p className={styles.tentangKamiTitle}>VISI</p>
                        <p className={styles.tentangKamiParagraph}>
                            Menjadi perusahaan profesional dan berintegritas tinggi di dalam bidang transportasi darat dengan megutamakan layanan terbaik demi kenyamanan dan keamanan bagi pengguna jasa/pelanggan serta menciptakan perusahaan transportasi yang kompetitif dengan mengutamakan kepuasan pelanggan artinya Kehadiran perusahaan harus dilihat dari dan untuk mereka yang memiliki kepentingan terhadap perusahaan, dalam hal ini tidak hanya dari sisi pemilik bisnis semata, akan tetapi diperluas dalam kelompok yang lebih luas.
                        </p>
                    </div>
                    <div className={styles.misi}>
                        <p className={styles.tentangKamiTitle}>MISI</p>
                        <div className={styles.misiCardContainer}>
                            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="200" className={styles.misiCard}>
                                <img src="/assets/tentangKami/misi/kepuasanPelanggan.svg" alt="" />
                                <p className={styles.misiTitle}>Kepuasan Pelanggan</p>
                                <p className={styles.misiParagraph}>Meningkatkan kepuasan pelanggan dengan menetapkan kualitas layanan yang terbaik untuk pengguna jasa layanan atau disebut pelanggan.</p>
                            </div>
                            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="200" className={styles.misiCard}>
                                <img src="/assets/tentangKami/misi/pengembanganSDM.svg" alt="" />
                                <p className={styles.misiTitle}>Pengembangan SDM</p>
                                <p className={styles.misiParagraph}>Mengembangkan Sumber Daya Manusia serta memberikan penghargaan atas prestasi kerja</p>
                            </div>
                            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="200" className={styles.misiCard}>
                                <img src="/assets/tentangKami/misi/peningkatanLaba.svg" alt="" />
                                <p className={styles.misiTitle}>Peningkatan Laba</p>
                                <p className={styles.misiParagraph}>Berusaha meningkatkan kemampuan laba perusahaan.</p>
                            </div>
                            <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="200" className={styles.misiCard}>
                                <img src="/assets/tentangKami/misi/tataKelola.svg" alt="" />
                                <p className={styles.misiTitle}>Tata Kelola</p>
                                <p className={styles.misiParagraph}>Menerapkan tata kelola perusahaan yang baik.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.roundedRight}>
                    <img src="/assets/tentangKami/roundRight.svg" alt=""/>
                </div>
                <div className={styles.roundedLeft}>
                    <img src="/assets/tentangKami/roundLeft.svg" alt=""/>
                </div>
                <img src="/assets/tentangKami/line.svg" alt="" className={styles.lineBottom} />
            </div>
            <div className={styles.layananContainer}>
                <p data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="200" className={styles.layananTitle}>Layanan Kami</p>
                <div className={styles.layananItemsContainer}>
                    <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.layananItems}>
                    <img className={styles.layananItemsImg} src="/assets/HomeAsset/layananPendek.svg" alt="Layanan Kami" />
                    <p className={styles.title3}>Sewa Jangka Pendek<br /><i>(Short Term)</i></p>
                    <p className={styles.paragraph}>Masa sewa yang berlangsung kurang dari 1 bulan, atau untuk memenuhi kebutuhan khusus dalam jangka waktu terbatas, seperti penyewaan harian atau mingguan, yang sering kali diperlukan untuk keperluan mendesak, perjalanan singkat, acara tertentu, atau kebutuhan transportasi sementara lainnya.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.layananItems}>
                    <img className={styles.layananItemsImg} src="/assets/HomeAsset/layananPanjang.svg" alt="Layanan Kami" />
                    <p className={styles.title3}>Sewa Jangka Panjang<br /><i>(Long Term)</i></p>
                    <p className={styles.paragraph}>Masa sewa yang berlangsung minimal 1 bulan atau lebih, dengan durasi yang dapat disesuaikan berdasarkan kesepakatan bersama antara konsumen dan GLG Rentcar, sering kali diperlukan untuk kebutuhan operasional jangka panjang, proyek tertentu, atau penggunaan rutin dalam periode yang telah ditentukan.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200" className={styles.layananItems}>
                    <img className={styles.layananItemsImg} src="/assets/HomeAsset/layananKunci.svg" alt="Layanan Kami" />
                    <p className={styles.title3}>Lepas Kunci</p>
                    <p className={styles.paragraph}>Durasi paket rental mobil harian lepas kunci (self drive) adalah 12 jam di hari pertama dan 24 jam di hari berikutnya, dengan layanan antar-jemput gratis dalam radius 10 km dari kantor GLG Rentcar, dan biaya tambahan untuk jarak lebih dari 10 km, serta semua risiko menjadi tanggung jawab pengguna; harga tidak berlaku untuk periode High Season dan Hari Raya Besar.</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200"className={styles.layananItems}>
                    <img className={styles.layananItemsImg} src="/assets/HomeAsset/layananDriver.svg" alt="Layanan Kami" />
                    <p className={styles.title3}>Plus Driver</p>
                    <p className={styles.paragraph}>Layanan rental mobil dengan supir memiliki durasi 12 jam di hari pertama dan 24 jam untuk hari berikutnya, belum termasuk BBM, tol, parkir, makan, serta biaya inap supir jika keluar kota, dengan biaya tambahan per jam untuk kelebihan waktu dan pembayaran langsung ke pengemudi atau melalui transfer.</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="200"className={styles.layananItems}>
                    <img className={styles.layananItemsImg} src="/assets/HomeAsset/layananService.svg" alt="Layanan Kami" />
                    <p className={styles.title3}>All in Service</p>
                    <p className={styles.paragraph}>Paket Layanan All In GLG Rentcar mencakup rental mobil dengan driver selama 12 jam di hari pertama dan 24 jam untuk hari berikutnya, termasuk BBM, tol, dan parkir dalam kota Bandar Lampung, dengan biaya tambahan untuk penggunaan di luar kota dan kelebihan durasi yang dihitung per jam, serta pembayaran overtime bisa dilakukan langsung kepada pengemudi atau melalui transfer.</p>
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