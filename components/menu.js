import Link from 'next/link'
import styles from "../styles/Menu.module.css";



function Menu() {
  return (


    <ul className={styles.links}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/bangers">Bangers</Link>
      </li>
      <li>
        <Link href="/posts/">Blog</Link>
      </li>
    </ul>
  )
}

export default Menu