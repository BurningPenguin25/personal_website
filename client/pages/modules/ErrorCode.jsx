
import styles from '../../styles/Error.module.css'
import Link from "next/link";
import ArrowError from "../../public/arrow.svg"
import Image from "next/image";


export default function Home() {
    return (
        <div className={styles.container}>


            <p>ERROR</p>

            <div className={styles.errorCode}>

                <Link href={'#'} >MAIN PAGE<Image src={ArrowError}/></Link>

                <h2>404</h2>

                <Link href={'#'} >CONTACT ME<Image src={ArrowError}/></Link>

            </div>

            <p>PAGE NOT FOUND</p>


        </div>
    )
}