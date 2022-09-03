import styles from './CSS/Search.module.css'
function Search(){
    return(
        <input type="text" placeholder="Pesquisar" className={styles.input_search}></input>
    )
}
export default Search