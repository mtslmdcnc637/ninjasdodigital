import styles from '../Conteiner.module.css'
import Card from '../Card'
function Blog(){
    const content = 
    "Todos nós sabemos que manter nossos dados seguros é importante. No artigo seguinte, ensinaremos como criar senhas fortes para que não sejam fáceis de serem adivinhadas. Vamos te dar algumas dicas de ninja pra que você não tenha mais preocupação com senhas nem esqueça mais delas. A primeira coisa que você vai precisar fazer é pesquisar no Google por criptografar texto e clicar no resultado que leva ao Invertexto. em seguida vai aparecer quatro campos, um de texto para criptografar e outro pra descriptografar e mais dois campos de código para codificar e  decodificar. O próximo passo é escolher um texto e um código. Nesses campos voce vai poder usar a imaginação para criar senhas que podem ser recuperadas depois, veja um exemplo: Ao criptografar o nome maria com o código joão você vai obter a senha: cxlWm9_0lE99rhuinpPIyQ Caso queira você pode criptografar novamente e usar como senha. se por acaso você esquecer a senha vai precisar lembras apenas do nome simples e do código, mas você pode estar pensado que é mais difícil gravar dois nomes ao invés de uma senha, mas na verdade não é porque você vai criar uma senha muito forte e como não tem como saber quantas vezes você criptografou e quais nomes você usou então podem ser palavras que tenham algum significado pra você ao invés do formato a1b2c3d4e5 que seria bem mais difícil de gravar"
    return(
        <div className={styles.conteiner}>
            <Card title="Como criar senhas seguras e dificais de esquecer" content={content} category="Segurança"/>
            <Card />
            <Card />
        </div>
    )
    
}
export default Blog