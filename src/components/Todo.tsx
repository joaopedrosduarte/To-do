import {ClipboardText, PlusCircle} from "phosphor-react"
import styles from "../styles/Todo.module.css"
import { InvalidEvent, useState, ChangeEvent, FormEvent } from "react"
import Task from './Task';

interface tasksProps{
    id: string,
    content: string,
    status: "doing" | "done"
}

export default function Todo(){
    const [tasks, setTasks] = useState([{ id : 'Fazer toogle para troca de temas.', content : 'Fazer toogle para troca de temas.', status: "doing" },{ id : 'Fazer intro para o site', content : 'Fazer intro para o site', status: "doing" },{ id : 'Prototipar o tema claro', content : 'Prototipar o tema claro', status: "doing" }])
    const [newTask, setNewTask] = useState('')

    function handleNewTaskIsInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatorio!');
    }
    
    function handleNewTaskChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }
    
    function handleNewTask(event:FormEvent){
        event.preventDefault();
        setTasks([{id:newTask, content:newTask, status:"doing"}, ...tasks])
        setNewTask('')
    }

    function handleChangeTaskStatus(taskContent:string, ){
        const newArrayTasks= tasks.map(task => {
            if (task.content === taskContent){
                if (task.status == 'done'){
                    task.status = 'doing'
                } else {
                    task.status = 'done'
                }
            }
            return task
        })

        setTasks(newArrayTasks)
    }
    
    function handleDeleteTask(taskContent:string){
        const newArrayTasks= tasks.filter(task => {
            return task.content !== taskContent
        })
        
        setTasks(newArrayTasks);
    }

    function getNumOfDoneTasks(){
        let i = tasks.filter(task => task.status === 'done').length

        return i
    }
    
    return (
        <div className={styles.todo}>
            <form className={styles.forms} onSubmit={handleNewTask} onKeyPress={event => { if (event.key === 'Enter'){handleNewTask}}}>
                <textarea required onInvalid={handleNewTaskIsInvalid} onChange={handleNewTaskChange} placeholder="Adicione uma nova tarefa" value={newTask}></textarea>
                <button>
                    <span>Criar</span><PlusCircle size={16} weight='bold' />
                </button>
            </form>
            <div className={tasks.length == 0 ? styles.countIsEmpty : styles.countIsNotEmpty }>
                <div className={styles.allTasks}>
                    <span className={styles.createdTasks}>Tarefas Criadas</span>
                    <span className={styles.count}>{tasks.length}</span>
                </div>
                <div className={styles.allTasks}> 
                    <span className={styles.doneTasks}>concluidas</span>
                    <span className={styles.count}>{tasks.length == 0 ? "0" : 
                    getNumOfDoneTasks().toString() + " de " + tasks.length }</span>
                </div>
            </div>
            <div className={styles.tasks}>
                {(tasks.length == 0 ?
                <div className={styles.empty}>
                    <ClipboardText size={64} color="#333333" weight="thin" className={styles.clipBoard}/>
                    <div>
                        <span className={styles.spanStrong}>Você ainda não tem tarefas cadastradas</span>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </div>
                :
                tasks.map(task => {
                    return(
                    <Task  key={task.id} content={task.content} onHandleChangeTaskStatus={handleChangeTaskStatus} onHandleDeleteTask={handleDeleteTask} />
                    )
                }))}
            </div>
         </div>
    )
}