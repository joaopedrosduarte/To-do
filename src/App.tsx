import styles from "./styles/App.module.css"
import Header from './components/Header';
import Todo from './components/Todo';
import './styles/global.css'

function App() {

  return (
    <div className={styles.content}>
      <Header />
      <main className={styles.wrapper}>
        <Todo />
      </main>
    </div>
  )
}

export default App
