import styles from './TopBar.module.css'
import {Link} from 'react-router-dom'
function TopBar (){
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <ul className={styles.menu}>
                    <li><Link to='/' className={styles.item}>Blog</Link></li>
                    <li><Link to='./components/pages/Jobs'className={styles.item}>Serviços</Link></li>
                    <li><Link to='./components/pages/Freelas'className={styles.item}>Freelas</Link></li>
                    <li><Link to='./components/pages/About'className={styles.item}>Sobre nós</Link> </li>

                </ul>
            </div>
           </div>
    )
}
export default TopBar