import style from "../styles/Header.module.css"
import logo from "../assets/logo-Todo.svg"

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.content}>
                <img src={logo} alt="logoTodo" />
                <div className={style.text}>
                    <p className={style.p1}>to</p>
                    <p className={style.p2}>do</p>
                </div>
            </div>
        </div>
    )
}