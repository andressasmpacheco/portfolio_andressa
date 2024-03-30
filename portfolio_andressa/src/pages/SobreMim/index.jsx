import styles from '../SobreMim/sobreMim.module.css'
import '../../App.css'
import Header from '../../components/Header'
import Botao from '../../components/Botao';

function SobreMim(){
    return(
        <section>
        <div>
        <Header/>
         </div>
         <p className={styles.paragrafo}>Sou a Andressa, nasci em 28 de novembro de 1995 em São Paulo, moro na zona Sul, 
            gosto de morango, pizza, Strogonoff, viajar, principalmente pra praia, e conhecer coisas novas.
            Após terminar o ensino médio, estudei História na Universidade de São Paulo, 
            participei de bolsas de pesquisa e ensino, dei aula em cursinhos pré vestibulares gratuitos. Tenho uma
            pós graduação em ensino de História e hoje sou docente na rede estadual de São Paulo,
            adoro mudar a vida das pessoas através do ensino.</p>
            <p className={styles.paragrafo}>
                Técnica em desenvolvimento de sistemas pela ETEC Irmã Agostina de São Paulo, área em que me apaixonei e
            continuamente estou me aperfeiçoando, além disso, acadêmica em análise e desenvolvimento de sistemas 
            pela FATEC-SP, onde estou no 4º semestre da graduação. Tenho conhecimentos em HTML, CSS, Javascript,
            C e Python. Amo ver os resultados das minhas criações e ansiosa para novos conhecimentos em tecnologia.
            </p>
        <div>
        <Botao/>
         </div>

         </section>
    );
}


export default SobreMim