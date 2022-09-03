import style from '../CSS/Freelas.module.css'
import Ninja from '../images/ninja.png'
function Freelas (){
    return(
    <div className={style.conteiner}>
        
        <div className={style.box}>
            <img src={Ninja} alt="Icone"></img>
            <h1>Nathã Lima</h1>
            <h3>Audiovisual</h3>
            <button>Ver perfil</button>

        </div>
    </div>
    
    )
}
export default Freelas;