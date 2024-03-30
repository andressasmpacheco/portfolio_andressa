import styles from '../Estudos/estudos.module.css'
import '../../App.css'
import Header from '../../components/Header'
import Botao from '../../components/Botao';
import fateclogo from '../../assets/fateclogo.jpg'
import logusp from '../../assets/logusp.jpg'
import ifmglogo from '../../assets/ifmglogo.jpg'
import logoetec from '../../assets/logoetec.jpg'




function Estudos(){
    return(
        <section >
        <div>
        <Header/>
         </div>
         <div className={styles.textoeimagem}>
         <div className={styles.historia}>
            <h1>Educação</h1>
            <div className={styles.tudojunto}>
         <img className={styles.logosestudos} src={logusp}></img>
            <p>Bacharelado e licenciatura em História realizada entre <mark>2014 e 2019.</mark>  Neste curso aprendi sobre metodologia científica, análise de imagens e fontes.
            Além disso, fui bolsista do programa de iniciação a docência e por quatro anos fui professora voluntária. Atualmente tenho <strong>4 anos de experiência profissional</strong> em sala de aula.</p>
            </div>
            <div className={styles.tudojunto}>
            <img className={styles.logosestudos} src={ifmglogo}></img>
            
            <p>Pós-graduação Latu-sensu em docência realizada entre <mark>2020 e 2021</mark>, cujo tema do Trabalho de conclusão de curso foi um estudo do uso de HQ'S no ensino de História. </p>
            </div> 
            </div>

            <div className={styles.ti}>
                <h1>Tecnologia</h1>
                <div className={styles.tudojunto}>
            <img className={styles.logosestudos}src={fateclogo}></img>
            <p>Curso tecnólogo de Análise e desenvolvimento de sistemas pela Faculdade de tecnologia do estado de São Paulo iniciado em <mark>2022</mark>. Tenho projetos em engenharia de software e atualmente realizo estágio no <strong>time de desenvolvimento da Alest Consultoria</strong>, o qual sua sede está localizada no bairro da Vila Olímpia/SP.</p>
 </div>
 <div className={styles.tudojunto}>
            <img  className={styles.logosestudos} src={logoetec}></img>
            <p>Possuo um grau no Curso tecnico de Desenvolvimento de sistemas pela Escola técnica do estado de São Paulo ETEC - Sede Irmã Agostina, concluído em <mark>2021</mark> e meu trabalho de conclusão de curso foi a construção de um <strong>Site e APP para agenda de serviços de barbearia e cabelereiro.</strong></p>
            </div>
            </div>
            </div>
        <div>
        <Botao/>
         </div>

         </section>
 
    );
}



export default Estudos