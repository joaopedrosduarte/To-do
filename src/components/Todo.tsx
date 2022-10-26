import {ClipboardText, PlusCircle} from "phosphor-react"
import styles from "../styles/Todo.module.css"
import { useState } from "react"
import Task from './Task';

interface tasksProps{
    id: string,
    content: string,
    status: "doing" | "done"
}

export default function Todo(){
    const [tasksArray, setTasksArray] = useState([{ id : '1', content : 'Criar o Readme da aplicação.', status: "doing" },{ id: '3', content: 'Fazer o codigo do todo.', status: "doing" }, { id: '2', content : 'Terminar o JavaScript.', status: "done" }, { id: '4', content: 'Finalizar a UI do site.', status: 'doing' }])

    function getNumOfDoneTasks(){
        let i = tasksArray.filter(task => task.status === 'done').length

        return i
    }

    return (
        <div className={styles.todo}>
            <form className={styles.forms}>
                <textarea placeholder="Adicione uma nova tarefa"></textarea>
                <button>
                    <span>Criar</span><PlusCircle size={16} weight='bold' />
                </button>
            </form>
            <div className={tasksArray.length == 0 ? styles.countIsEmpty : styles.countIsNotEmpty }>
                <div className={styles.allTasks}>
                    <span className={styles.createdTasks}>Tarefas Criadas</span>
                    <span className={styles.count}>{tasksArray.length}</span>
                </div>
                <div className={styles.allTasks}> 
                    <span className={styles.doneTasks}>concluidas</span>
                    <span className={styles.count}>{tasksArray.length == 0 ? "0" : 
                    getNumOfDoneTasks().toString() + " de " + tasksArray.length }</span>
                </div>
            </div>
            {/* missing logic */}
            <div className={styles.tasks}>
                {(tasksArray.length == 0 ?
                <div className={styles.empty}>
                    <ClipboardText size={64} color="#333333" weight="thin" className={styles.clipBoard}/>
                    <div>
                        <span className={styles.spanStrong}>Você ainda não tem tarefas cadastradas</span>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </div>
                :
                tasksArray.map(task => {
                    return(
                    <Task  key={task.id} content={task.content} />
                    )
                }))}
            </div>
         </div>
    )
}