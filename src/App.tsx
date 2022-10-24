import styles from "./styles/global.css"
import Header from './components/Header';
import Todo from './components/Todo';

function App() {

  return (
    <div className={styles}>
      <Header />
      <Todo />
    </div>
  )
}

export default App
