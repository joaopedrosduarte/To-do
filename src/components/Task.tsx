import styles from "../styles/Task.module.css"
import { Circle, Trash } from "phosphor-react"
import { useState } from 'react';
import Check from './Check';

interface taskProps {
    content: string
}

export default function Task({content}: taskProps){
    let [circleButtonChecked,setCircleButtonChecked] = useState(false)

    function handleChangeCircleButtonState(){
        circleButtonChecked ? (setCircleButtonChecked(false)) : (setCircleButtonChecked(true))
    }

    

    return (
        <div className={circleButtonChecked ? (styles.taskNotChecked) : (styles.taskChecked)}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <label className={styles.circleButtonWrapper}>
                        <input type="checkbox" onClick={handleChangeCircleButtonState}/>
                        { circleButtonChecked ? (<div className={styles.circleButtonNotChecked}><Check/></div>) : (<div></div>)}
                    </label>
                    {(<span className={circleButtonChecked ? (styles.contentChecked):(styles.contentNotChecked)}>{content}</span>)}
                    <button className={styles.trashCanButton}>
                        <Trash size={20} weight="regular" className={styles.trashIcon}/>
                    </button>
                </div>
            </div>
        </div>
    )
}