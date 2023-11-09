import styles from '../../styles/ModalPage.module.css'
export default function ModalPage({modal, setModal}) {

    return (

           <div  className={modal ?  styles.modal: styles.unmodal}>

               <div className={styles.fields}>

              <div className={styles.closeModal}>
                  <button onClick={()=>setModal(false)}>X</button>
              </div >

              <form>
                  <h2>CONTACT ME</h2>

                  <div className={styles.inputContatData}>
                      <input placeholder={'Name'}/>
                  </div>

                  <div className={styles.inputContatData}>
                      <input placeholder={'Email'} />
                  </div>

                  <div className={styles.inputTextMail}>
                      <textarea  placeholder={'Email'}/>
                  </div>

                  <div className={styles.sendmail}>
                      <button> SEND </button>
                  </div>
              </form>

          </div>

      </div>
    )
}
