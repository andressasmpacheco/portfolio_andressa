import '../../App.css'
import styles from '../Contatos/contatos.module.css'
import Header from '../../components/Header'
import Botao from '../../components/Botao';
import {Link} from 'react-router-dom'
function Contatos(){
    return(
        <section>
        <div>
        <Header/>
         </div>

         <div className={styles.contatos}>
 <h1>Meus contatos</h1>
 <span><strong>Endereço profissional:</strong> <p className={styles.endereco}>Rua do Rocio, 291 - Vila Olímpia - São Paulo</p></span>
<span><strong>Linkedin:</strong><Link to="https://www.linkedin.com/in/andressasmpacheco/">https://www.linkedin.com/in/andressasmpacheco/</Link></span>
<span><strong>GitHub:</strong><Link to=" https://github.com/andressasmpacheco">https://github.com/andressasmpacheco</Link></span>
<span><strong>E-mail:</strong><Link to=" andressapacheco@prof.educacao.sp.gov.br">andressapacheco@prof.educacao.sp.gov.br</Link></span>
 </div> 
        <div>
        <Botao/>
         </div>

         </section>
 
    );
}


export default Contatos