import Search from "./Search"
import Sidebar from "./Sidebar"
import style from './CSS/Column_01.module.css'
import TopPosts from './TopPosts'

function Column_01(){
    return(
        <div className={style.column_01}>
        <Search />
        <Sidebar />
        <TopPosts />
        </div>
    )
}
export default Column_01