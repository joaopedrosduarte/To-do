import styles from "../styles/Task.module.css"
import { Circle, Trash } from "phosphor-react"

interface taskProps {
    content: string
}

export default function Task({content}: taskProps){
    return (
        <div className={styles.task}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <label className={styles.circleButtonWrapper}>
                        <div className={styles.circleButton}> 
                            <input type="checkbox" />
                        </div>
                    </label>
                    <span className={styles.content}>
                        {content}
                    </span>
                    <button className={styles.trashCanButton}>
                        <Trash size={20} weight="regular" className={styles.trashIcon}/>
                    </button>
                </div>
            </div>
        </div>
    )
}