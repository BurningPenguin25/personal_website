
import styles from '../../styles/Footer.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className={styles.container}>

            <Link href={'#'}> pavelbodnar </Link>

            <div className={styles.rightBlock}>

                <div className={styles.netlogo}>
                    <Link href={'#'}> <Image/> O </Link>
                    <Link href={'#'}> <Image/> O </Link>
                    <Link href={'#'}> <Image/> O </Link>
                    <Link href={'#'}> <Image/> O </Link>
                </div>

                <div className={styles.linkPage}>
                    <Link href={'#'}> Skills </Link>
                    <Link href={'#'}> About </Link>
                    <Link href={'#'}> Resume </Link>
                    <Link href={'#'}> Website development</Link>
                    <Link href={'#'}> Contact me</Link>
                </div>

            </div>

        </div>






    )
}
