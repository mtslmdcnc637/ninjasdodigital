import styles from './Hero.module.css'
function Hero(){
    return(
        <>
            <div className={styles.conteiner}>
                <h1>Bem Vindo/a à comunidade <b>ninjas do digital!</b></h1>
                <p>A nossa comunidade tem a intenção de conectar profissionais freelancer à pessoas que precisam de seus serviços, nossoblog tambem tem postagens recorrentes de conteúdos que podem facilitar a sua vida no ditial</p>
            </div>
        </>
    )
}
export default Hero;