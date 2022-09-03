import Conteiner from "./Conteiner"
import Hero from "./Hero"
import style from './CSS/Column_02.module.css'

function Column_02(){
    return(
        <div className={style.column_02}>
        <Hero />
        <Conteiner />
        </div>
    )
}
export default Column_02