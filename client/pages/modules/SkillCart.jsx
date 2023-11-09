
import styles from '../../styles/Skill.module.css'
import {useRouter} from "next/dist/client/compat/router";
import Link from "next/link";
import Image from "next/image";
import imageHtml from "../../public/vscode-icons_file-type-html.svg"

export default function Home() {

    const router = useRouter()

    let currentLink = ''

    const crumbs = router.pathname.split('/')
        .filter(crumb=>crumb!== '')
        .map(crumb=>{
            currentLink += `/${crumb}`
            return (
                <div key={crumb}>
                    <Link href={currentLink}>{crumb}</Link>
                </div>
            )
        })



    const score = 7 // от 0 до 10
    const percentScore = (score * 10) + '%'


    console.log(percentScore)

    return (
            <div className={styles.container}>

                <div>{crumbs}</div>

                <div className={styles.skillcart}>

                   <p>{score}/10</p>

                    <div className={styles.skillcartInfo}>
                        <h2 >HTML</h2>
                        <Image src={imageHtml}/>
                    </div>


                    <div  className={styles.skillbarlock}>
                        <div className={styles.skillbar}>
                            <span className={styles.skillbarout} style={{width: percentScore}}> </span>
                        </div>
                    </div>


                </div>
        </div>
    )
}
