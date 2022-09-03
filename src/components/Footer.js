import styles from './CSS/Footer.module.css'
function Footer (){
    return( 
       
    <div className={styles.options}>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-tiktok"></i>
        <i className="bi bi-telegram"></i>
        <h5>Ninjas do digital 2022</h5>
    </div>
    
    )
}
export default Footer;