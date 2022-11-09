import styles from "./styles/App.module.css"
import Header from './components/Header';
import Todo from './components/Todo';
import './styles/global.css'
import Intro from './components/Intro';
import { motion } from "framer-motion"

function App() {

  return (
    <div className={styles.content}>
      <Intro/>
      <Header />
      <main className={styles.wrapper}>
        <Todo />
      </main>
    </div>
  )
}

export default App
