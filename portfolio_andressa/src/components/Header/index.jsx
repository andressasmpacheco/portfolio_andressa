import '../../../src/App.css'
import {Link} from 'react-router-dom'
import logo2 from '../../assets/logo2.jpg'
import styles from '../Header/Header.module.css'

function Header(){

    return(
        
<header className={styles.Header}>
        <div className={styles.logo}>
          <Link to="/"> <img className={styles.logoImage} src={logo2}/></Link>
          
          <div className={styles.cabecalho_links}>
          <Link to="/">Página Inicial</Link>
          <Link to="/SobreMim">Sobre mim</Link>
          <Link to="/Estudos">Estudos</Link>
          <Link to="/Certificacoes">Certificações DEV</Link>
          <Link to="/Contatos">Contatos</Link>
          </div>
        </div>
      </header>

    
    );
}

export default Header;