
import styles from '../../styles/Header.module.css'
import Link from "next/link";


export default function Home() {
    return (
        <div className={styles.container}>

            <Link href={"#"} className={styles.logo}>pavelbodnar</Link>

            <div className={styles.links}>
                <Link href={"#"}>Skills</Link>
                <Link href={"#"}>About me</Link>
                <Link href={"#"}>Resume</Link>
                <Link href={"#"}>Website development</Link>
                <Link href={"#"}>Contact me</Link>
            </div>

            <div>RU/ENG</div>

        </div>
    )
}
