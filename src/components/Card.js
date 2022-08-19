import styles from './Card.module.css'

function Card(){

    return(
        <>
    <div className={styles.conteiner_cards}>
        <div className={styles.icon}><i className="bi bi-hammer"></i></div>
        <div className={styles.icon}>
               
                <h3>Serviços oferecidos</h3>
                <ul>
                    <li>Landing pages</li>
                    <li>Social Media</li>
                    <li>Edição de videos</li>
                    <li>Gestão de tráfego</li>
                    <li>Locução de VSL's</li>
                </ul>
                <a href="ninjas/" className={styles.button_pages}>Visitar página</a>
            
        </div>
        </div>
   
    </>
    )}
export default Card