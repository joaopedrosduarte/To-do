import {PlusCircle} from "phosphor-react"
import styles from "../styles/Todo.module.css"
import emptyImage from "../assets/empty-img.svg"
import { useEffect, useState } from "react"
import Task from './Task';

interface todoProps{
    id: string,
    content: string,
    status: "doing" | "done"
}

const Tasks:todoProps[] = [
    
]

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
                    {/* missing logic */}
                    <span className={styles.count}>0</span>
                </div>
                <div className={styles.allTasks}> 
                    <span className={styles.doneTasks}>concluidas</span>
                    {/* missing logic */}
                    <span className={styles.count}>0 de 5</span>
                </div>
            </div>
            {/* missing logic */}
            {console.log(Tasks.length)}
            {(Tasks.length == 0 ? 
            <div className={styles.empty}>
                <img src={emptyImage} />
                <span>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div> 
            : 
            Tasks.map(task => {
                return(
                <Task  key={task.id} content={task.content} />
                )
            }))}
         </div>
    )
}