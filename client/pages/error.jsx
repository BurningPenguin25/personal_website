
import Header from './modules/Header'
import ErrorCode from './modules/ErrorCode'
import Footer from './modules/Footer'
import styles from '../styles/Home.module.css'

export default function Error() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>

                <Header/>
                <ErrorCode/>
                <Footer/>

            </div>
        </div>
    )
}