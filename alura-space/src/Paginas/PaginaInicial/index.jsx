import banner from "./banner.png";
import styles from "./PaginaInicial.module.scss";

import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Populares from "componentes/Populares";
import Rodape from "componentes/Rodape";

export default function PaginaInicial() {
   return (
      <>
         <Cabecalho />
         <main>
            <section className={styles.principal}>
               <Menu />
               <div className={styles.principal__imagem}>
                  <h1>Imagens vistas do Espaço</h1>
                  <img src={banner} alt="imagens vistas do Espaço" />
               </div>
            </section>
            <div className={styles.galeria}>
               <Galeria />
               <Populares />
            </div>
            <Rodape />
         </main>
      </>
   )
}