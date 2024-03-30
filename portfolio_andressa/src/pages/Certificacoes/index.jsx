//import '../../App.css'
import Header from '../../components/Header';
import styles from '../Certificacoes/certificacoes.module.css'
import Botao from '../../components/Botao';
import alura from '../../assets/alura.jpg'
import cisco from '../../assets/cisco.jpg'
import dio from '../../assets/dio.jpg'

function Certificacoes(){
    return(
           
            
        <section>
        <div>
        <Header/>
         </div>
         <div className='conteudoTodo'>
         <div className={styles.alura}>
         <img className={styles.imgcertificado} src={alura}></img>
            <p>-SQL com MySQL: manipule e consulte dados</p>
            <p>-Organização de equipes ágeis</p>
            <p>-JavaScript e HTML</p>
            </div> 
            <div className={styles.alura}>
            <img className={styles.imgcertificado} src={dio}></img>
            <p>-Dominando o Protocolo HTTP e Integrando com a PokeAPI</p>
            <p>-Criando um Projeto com HTML/CSS para Listagem de Pokémon</p>
            <p>-Arrays e Estruturas de Repetição em JavaScript</p>
            </div>
            <div className={styles.alura}>
            <img className={styles.imgcertificado} src={cisco}></img>
            <p>-IT Essentials </p>
            </div>
            </div>
        <div>
        <Botao/>
         </div>

         </section>
         
            
    );
}

export default Certificacoes