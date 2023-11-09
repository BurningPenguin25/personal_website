import styles from '../../styles/Skill.module.css'
import Image from "next/image";
import imageHtml from "../../public/vscode-icons_file-type-html.svg"
import Crumbs from "./BroadCrumbs"

export default function Skills() {

    const score = 7 // от 0 до 10
    const percentScore = (score * 10) + '%'

    return (
            <div className={styles.container}>

                <Crumbs/>

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
