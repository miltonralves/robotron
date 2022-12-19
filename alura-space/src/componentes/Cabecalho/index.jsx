import logo from './logo.png';
import search from './search.png';
import styles from './Cabecalho.module.scss';

export default function Cabecalho() {
   return (
      <header className={styles.cabecalho}>
         <img src={logo} alt="Logo do Alura Space" />
         <div className={styles.Cabecalho__container}>
            <input className={styles.cabecalho__input} type="text" placeholder="o que você procura?" />
            <img src={search} alt="ícone da lupa" />
         </div>
      </header>
   )
}