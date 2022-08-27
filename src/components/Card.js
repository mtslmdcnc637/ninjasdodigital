import styles from './Card.module.css'
import {RiFacebookCircleLine} from 'react-icons/ri'

function Card(props){

    return(
        <>
        

            <div className={styles.card_box}>
                <div className={styles.hero_card}>
                <RiFacebookCircleLine />
                </div>
                <h3>{props.title}</h3>
                <h5>Categoria: {props.category}</h5>
                <p>{props.content}</p>
                
            </div>
            
            
        
        </>
    )}
export default Card