import styles from './TopBar.module.css'
function TopBar (){
    return(
        <div className={styles.header}>
            <div className={styles.logo}>Ninjas do figital</div>
            <div className={styles.options}>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-tiktok"></i>
            <i className="bi bi-telegram"></i>
        </div></div>
    )
}
export default TopBar