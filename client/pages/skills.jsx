import Header from './modules/Header'
import styles from '../styles/Skill.module.css'
import Footer from "./modules/Footer";
import SkillCart from "./modules/SkillCart"


export default function Skills() {


    return (
        <div className={styles.main}>
            <div className={styles.container}>

                <Header/>
                 <SkillCart/>
                <Footer/>

            </div>
        </div>
    )
}
