import style from "../styles/Header.module.css"
import logo from "../assets/logo-Todo.svg"
import LogoTodo from './LogoTodo';

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.content}>
                <LogoTodo/>
                <div className={style.text}>
                    <p className={style.p1}>to</p>
                    <p className={style.p2}>do</p>
                </div>
            </div>
        </div>
    )
}