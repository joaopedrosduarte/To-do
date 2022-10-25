import style from "../styles/Task.module.css"
import { Circle, Trash } from "phosphor-react"

interface taskProps {
    content: string
}

export default function Task({content}: taskProps){
    return (
        <div className={style.task}>
            <div className={style.main}>
                <div>
                    <button className={style.circleButton}></button>
                    <span>
                        {content}
                    </span>
                    <button className={style.trashButton}>
                        <Trash size={20} weight="regular" className={style.trashIcon}/>
                    </button>
                </div>
            </div>
        </div>
    )
}