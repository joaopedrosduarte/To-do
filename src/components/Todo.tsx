import {PlusCircle} from "phosphor-react"
import styles from "../styles/Todo.module.css"

export default function Todo(){


    return (
        <div className={styles.todo}>
            <form className={styles.forms}>
                <textarea placeholder="Adicione uma nova tarefa"></textarea>
                <button>
                    <span>Criar</span><PlusCircle size={16} weight='bold' />
                </button>
            </form>
            <div className={styles.counts}>
                <div className={styles.allTasks}>
                    <span className={styles.createdTasks}>Tarefas Criadas</span>
                    <span className={styles.count}>0</span>
                </div>
                <div className={styles.allTasks}>
                    <span className={styles.doneTasks}>concluidas</span>
                    <span className={styles.count}>0</span>
                </div>
            </div>
        </div>
    )
}