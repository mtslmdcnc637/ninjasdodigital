import Column_01 from "../Column_01"
import Column_02 from "../Column_02"
import style from '../CSS/Blog.module.css'

function Blog(){
    return(
        <div className={style.content}>
        <Column_01 />
        <Column_02 />
        </div>
    )
    
}
export default Blog