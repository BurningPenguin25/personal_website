
import styles from '../../styles/MainContent.module.css'
import Link from "next/link";
import {useState} from "react";



export default function Home({modal, setModal}) {
    return (
        <div className={styles.container}>
            <p>Hi, my name is Pasha!</p>

            <text>A web-developer with experience building high-performance web applications.</text>

            <div className={styles.mainlinks}>
                <button >MY RESUME</button>
                <button onClick={()=>setModal(true)}>CONTACT ME</button>
            </div>


        </div>
    )
}