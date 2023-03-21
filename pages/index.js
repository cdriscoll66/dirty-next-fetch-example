import Link from 'next/link'
import styles from "../styles/Home.module.css";
import Menu from '../components/menu';


function Home() {
  return (
    <main className={styles.main}>
          <div className={styles.container}>
            <h1 className={styles.center}>Quick Spin up </h1>
    </div>

<Menu />
        </main>
  )
}

export default Home