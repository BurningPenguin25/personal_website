import Header from './modules/Header'
import styles from '../styles/Home.module.css'
import Footer from "./modules/Footer";
import MainContent from "./modules/MainContent"
import ModalPage from "./modules/modalmain.module";
import {useState} from "react";

export default function Home() {

    const [modal, setModal] = useState(false)

  return (
    <div className={styles.main}>
      <div className={styles.container}>

          <Header/>
          <MainContent  modal={modal} setModal={setModal} />
          <Footer/>
          <ModalPage modal={modal} setModal={setModal}/>

      </div>
    </div>
  )
}
